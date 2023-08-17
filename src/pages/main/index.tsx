import { useState } from 'react';
import tw from 'twin.macro';
import { Client, Wallet, xrpToDrops } from 'xrpl';

import { FilledMediumButton } from '~/components/buttons';
import { TextField } from '~/components/text-field';
import { NET } from '~/constants';

const DEPOSIT = 1;
const OWNER_ADDRESS = 'rPucpCcAQH6mjJrL6PS4Cot2dD2WLoeZkA';

const MainPage = () => {
  const [seed, setSeed] = useState<string>();
  const [address, setAddrss] = useState<string>();
  const [balance, setBalance] = useState<string>();

  const getAccountFromSeeds = async () => {
    if (!seed) return;

    const client = new Client(NET);
    await client.connect();

    const wallet = Wallet.fromSeed(seed);
    setAddrss(wallet.address);

    const balance = await client.getXrpBalance(wallet.address);
    setBalance(balance.toString());

    client.disconnect();
  };

  const getAccount = async () => {
    const client = new Client(NET);
    await client.connect();

    const wallet = (await client.fundWallet(null)).wallet;
    setAddrss(wallet.address);

    console.log('...wip...');

    const balance = await client.getXrpBalance(wallet.address);
    setBalance(balance.toString());

    client.disconnect();
  };

  const buyTicket = async () => {
    if (!address || !seed) return;
    const client = new Client(NET);
    await client.connect();

    const prepared = await client.autofill({
      TransactionType: 'Payment',
      Account: address,
      Amount: xrpToDrops(DEPOSIT),
      Destination: OWNER_ADDRESS,
      Memos: [{ Memo: { MemoData: '123456' } }],
    });

    const signed = Wallet.fromSeed(seed).sign(prepared);
    const tx = await client.submitAndWait(signed.tx_blob);

    console.log(tx);

    client.disconnect();
  };

  return (
    <Wrapper>
      <TextWrapper>owner address : {OWNER_ADDRESS}</TextWrapper>
      <TextField placeholder="Enter your private key" onChange={e => setSeed(e.target.value)} />
      <ButtonWrapper>
        <FilledMediumButton text={'Create Wallet'} onClick={getAccount} />
        <FilledMediumButton text={'Connect Wallet'} onClick={getAccountFromSeeds} />
      </ButtonWrapper>
      <TextWrapper>address : {address}</TextWrapper>
      <TextWrapper>balance : {balance}</TextWrapper>
      <FilledMediumButton text={'Buy Ticket'} onClick={buyTicket} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  bg-gray5 flex flex-col gap-10 p-20 rounded-10
`;

const ButtonWrapper = tw.div`
  flex gap-10
`;

const TextWrapper = tw.div`
  text-white
`;

export default MainPage;
