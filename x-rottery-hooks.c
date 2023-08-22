#include "hookapi.h"
#include <stdint.h>
#define TICKET_PRICE 10000000

/**
 * @invoke ttPAYMENT ttACCOUNT_SET
 * @field admin
 */

int64_t hook(uint32_t reserved)
{

    TRACESTR("XRottery: started");

    unsigned char hook_accid[20];
    hook_account((uint32_t)hook_accid, 20);

    uint8_t account_field[20];
    int32_t account_field_len = otxn_field(SBUF(account_field), sfAccount);
    TRACEVAR(account_field_len);
    if (account_field_len < 20)                                   // negative values indicate errors from every api
        rollback(SBUF("XRottery: sfAccount field missing!!!"), 1);  // this code could never be hit in prod

    // compare the "From Account" (sfAccount) on the transaction with the account the hook is running on
    int equal = 0; BUFFER_EQUAL(equal, hook_accid, account_field, 20);
    if (!equal)
    {
        // INCOMING
        TRACESTR("XRottery: INCOMING");

        // check for the presence of a memo
        uint8_t memos[2048];
        int64_t memos_len = otxn_field(SBUF(memos), sfMemos);

        uint32_t payload_len = 0;
        uint8_t* payload_ptr = 0;
        if (memos_len <= 0)
            accept(SBUF("XRottery: Passing non-memo incoming transaction."), 0);

        int64_t memo_lookup = sto_subarray(memos, memos_len, 0);

        TRACEVAR(memo_lookup);
        if (memo_lookup < 0)
            rollback(SBUF("XRottery: Memo transaction did not contain correct format."), 30);

        // if the subfield/array lookup is successful we must extract the two pieces of returned data
        // which are, respectively, the offset at which the field occurs and the field's length
        uint8_t*  memo_ptr = SUB_OFFSET(memo_lookup) + memos;
        uint32_t  memo_len = SUB_LENGTH(memo_lookup);

        trace(SBUF("Memo: "), memo_ptr, memo_len, 1);

        // memos are nested inside an actual memo object, so we need to subfield
        // equivalently in JSON this would look like memo_array[i]["Memo"]
        memo_lookup = sto_subfield(memo_ptr, memo_len, sfMemo);
        memo_ptr = SUB_OFFSET(memo_lookup) + memo_ptr;
        memo_len = SUB_LENGTH(memo_lookup);

        // now we lookup the subfields of the memo itself
        // again, equivalently this would look like memo_array[i]["Memo"]["MemoData"], ... etc.
        int64_t data_lookup = sto_subfield(memo_ptr, memo_len, sfMemoData);

        TRACEVAR(data_lookup);

        // if any of these lookups fail the request is malformed
        if (data_lookup < 0)
            rollback(SBUF("XRottery: Memo transaction did not contain correct memo format."), 40);

        // care must be taken to add the correct pointer to an offset returned by sub_array or sub_field
        // since we are working relative to the specific memo we must add memo_ptr, NOT memos or something else
        payload_ptr = SUB_OFFSET(data_lookup) + memo_ptr;
        payload_len = SUB_LENGTH(data_lookup);

        unsigned char amount_buffer[48];
        int64_t amount_len = otxn_field(SBUF(amount_buffer), sfAmount);
        int64_t otxn_drops = AMOUNT_TO_DROPS(amount_buffer);
        TRACESTR("XRottery: Incoming drops");
        TRACEVAR(otxn_drops);
        if (otxn_drops > TICKET_PRICE || otxn_drops < TICKET_PRICE)
            rollback(SBUF("XRottery: The incoming drops is not the same with the fixed ticket price."), 41);

        uint32_t jackpot_amount;
        uint32_t ticket_length;
        uint8_t jackpot_buffer[4];
        uint8_t length_buffer[4];
        uint8_t jackpot_request[32];
        uint8_t length_request[32];
        CLEARBUF(jackpot_request);
        CLEARBUF(length_request);
        jackpot_request[16]++; // static key for jackpot
        length_request[15]++; // static key for length

        if (state(SBUF(jackpot_buffer), SBUF(jackpot_request)) != 4
            || state(SBUF(length_buffer), SBUF(length_request)) != 4) {
            jackpot_amount = 0;
            ticket_length = 0;
            CLEARBUF(jackpot_buffer);
            CLEARBUF(length_buffer);
        } else {
            jackpot_amount = UINT32_FROM_BUF(jackpot_buffer);
            ticket_length = UINT32_FROM_BUF(length_buffer);
        }

        uint8_t length_buffer_as_key[32];
        for (int i = 0; GUARD(4), i < 4; ++i){
            length_buffer_as_key[i] = length_buffer[i];
        }
        for (int i = 4; GUARD(28), i < 32; ++i){
            length_buffer_as_key[i] = 0;
        }

        uint8_t payload_as_key[32];
        for (int i = 0; GUARD(4), i < 4; ++i){
            payload_as_key[i] = *(payload_ptr + i);
        }
        for (int i = 4; GUARD(28), i < 32; ++i){
            payload_as_key[i] = 0;
        }

        TRACESTR("payload as key");
        TRACEVAR(payload_as_key[0]);
        TRACEVAR(payload_as_key[1]);
        TRACEVAR(payload_as_key[2]);
        TRACEVAR(payload_as_key[3]);
        TRACEVAR(payload_as_key[31]);

        state_set(SBUF(payload_as_key), SBUF(length_buffer_as_key)); // key : idx - value : memo, key : memo - value : addr
        state_set(SBUF(account_field), SBUF(payload_as_key));
        TRACESTR("account input");
        TRACEVAR(account_field[0]);
        TRACEVAR(account_field[1]);
        TRACEVAR(account_field[2]);
        TRACEVAR(account_field[3]);

        UINT32_TO_BUF(jackpot_buffer, jackpot_amount + TICKET_PRICE);
        UINT32_TO_BUF(length_buffer, ticket_length + 1);

        state_set(SBUF(jackpot_buffer), SBUF(jackpot_request));
        state_set(SBUF(length_buffer), SBUF(length_request));

        TRACESTR("XRottery: Last line of the incoming tx.");
        TRACEVAR(jackpot_amount);
        TRACEVAR(ticket_length);
    }
    else
    {
        // OUTGOING
        TRACESTR("XRottery: OUTGOING");

        // before we start calling hook-api functions we should tell the hook how many tx we intend to create
        etxn_reserve(1); // we are going to emit 1 transaction

        uint32_t jackpot_amount;
        uint32_t ticket_length;
        uint8_t jackpot_buffer[4];
        uint8_t length_buffer[4];
        uint8_t jackpot_request[32];
        uint8_t length_request[32];
        CLEARBUF(jackpot_request);
        CLEARBUF(length_request);
        jackpot_request[16]++; // static key for jackpot
        length_request[15]++; // static key for length

        if (state(SBUF(jackpot_buffer), SBUF(jackpot_request)) != 4
            || state(SBUF(length_buffer), SBUF(length_request)) != 4)
            rollback(SBUF("XRottery: There has been no incoming tickets."), 42);

        jackpot_amount = UINT32_FROM_BUF(jackpot_buffer);
        ticket_length = UINT32_FROM_BUF(length_buffer);

        TRACESTR("Current Jackpot and TicketLength");
        TRACEVAR(jackpot_amount);
        TRACEVAR(ticket_length);

        uint32_t memos[10]; // The maximum ticket num is 10 in this hackathon :P

        for (int idx = 0; GUARD(10), idx < ticket_length; ++idx) {
            TRACESTR("idx:");
            TRACEVAR(idx);
            uint8_t index_buffer[4];
            UINT32_TO_BUF(index_buffer, idx);

            uint8_t payload_as_key[32];

            uint8_t index_buffer_as_key[32];
            for (int i = 0; GUARD(40), i < 4; ++i) {
                index_buffer_as_key[i] = index_buffer[i];
            }
            for (int i = 4; GUARD(280), i < 32; ++i) {
                index_buffer_as_key[i] = 0;
            }

            state(SBUF(payload_as_key), SBUF(index_buffer_as_key));

            uint8_t payload_buffer[4];
            for (int i = 0; GUARD(40), i < 4; ++i) {
                payload_buffer[i] = payload_as_key[i];
            }
            uint32_t payload = UINT32_FROM_BUF(payload_buffer);
            TRACESTR("input payload:");
            TRACEVAR(payload);
            memos[idx] = payload;
        }

        uint8_t transaction_hash_field[32];
        int32_t transaction_hash_field_len = otxn_field(SBUF(transaction_hash_field), sfTransactionHash);
        uint8_t random_seed_buffer[4];
        for (int i = 0; GUARD(4), i < 4; ++i) {
            random_seed_buffer[i] = transaction_hash_field[10 + i];
        }
        uint32_t random_seed = UINT32_FROM_BUF(random_seed_buffer);
        uint32_t winner_payload = memos[random_seed % ticket_length];
        TRACESTR("Winner payload:");
        TRACEVAR(winner_payload);

        uint8_t payload_buffer[4];
        UINT32_TO_BUF(payload_buffer, winner_payload);
        uint8_t payload_buffer_as_key[32];
        for (int i = 0; GUARD(4), i < 4; ++i) {
            payload_buffer_as_key[i] = payload_buffer[i];
        }
        for (int i = 4; GUARD(28), i < 32; ++i) {
            payload_buffer_as_key[i] = 0;
        }

        TRACESTR("payload buffer as key");
        TRACEVAR(payload_buffer_as_key[0]);
        TRACEVAR(payload_buffer_as_key[1]);
        TRACEVAR(payload_buffer_as_key[2]);
        TRACEVAR(payload_buffer_as_key[3]);
        TRACEVAR(payload_buffer_as_key[31]);

        uint8_t winner_account[20];
        state(SBUF(winner_account), SBUF(payload_buffer_as_key));

        TRACESTR("winner account output");
        TRACEVAR(winner_account[0]);
        TRACEVAR(winner_account[1]);
        TRACEVAR(winner_account[2]);
        TRACEVAR(winner_account[3]);

        // create a buffer to write the emitted transaction into
        unsigned char tx[PREPARE_PAYMENT_SIMPLE_SIZE];
        PREPARE_PAYMENT_SIMPLE(tx, jackpot_amount, winner_account, 0, 0);

        // emit the transaction
        uint8_t emithash[32];
        int64_t emit_result = emit(SBUF(emithash), SBUF(tx));
        TRACEVAR(emit_result);
    }

    accept(SBUF("XRottery: Last Line!"), 0);
    return 0;
}

