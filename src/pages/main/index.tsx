import { useState } from 'react';
import tw from 'twin.macro';
import { Client, Wallet, xrpToDrops } from 'xrpl';

import { FilledMediumButton } from '~/components/buttons';
import { Gnb } from '~/components/gnb';
import { ConnectPopup } from '~/components/popups/connect-popup';
import { TextField } from '~/components/text-field';
import { NET, POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useWalletStore } from '~/states/wallet-info';

const DEPOSIT = 1;
const OWNER_ADDRESS = 'rPucpCcAQH6mjJrL6PS4Cot2dD2WLoeZkA';

const MainPage = () => {
  const { wallet, balance, reset } = useWalletStore();
  const { opened } = usePopup(POPUP_ID.CONNECT);

  const [hash, setHash] = useState<string>();
  const [number, setNumber] = useState<string>();

  const buyTicket = async () => {
    if (!wallet?.classicAddress || !wallet.seed) return;
    const client = new Client(NET);
    await client.connect();

    const prepared = await client.autofill({
      TransactionType: 'Payment',
      Account: wallet?.classicAddress,
      Amount: xrpToDrops(DEPOSIT),
      Destination: OWNER_ADDRESS,
      Memos: [{ Memo: { MemoData: number } }],
    });

    const signed = Wallet.fromSeed(wallet.seed).sign(prepared);
    const tx = await client.submitAndWait(signed.tx_blob);

    console.log(tx);

    setHash(tx.result.hash);

    client.disconnect();
  };

  return (
    <Wrapper>
      <Gnb
        address={wallet?.classicAddress as `r${string}`}
        isConnected={!!wallet?.classicAddress}
        xrpBalance={balance}
        disconnect={reset}
      />

      <TextField placeholder="Set Number" onChange={e => setNumber(e.target.value)} />
      <FilledMediumButton text={'Buy Ticket'} onClick={buyTicket} />
      <TextWrapper>{hash}</TextWrapper>
      {opened && <ConnectPopup />}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  bg-gray5 flex flex-col gap-10 p-20 rounded-10 pt-90 relative
`;

const TextWrapper = tw.div`
  text-white
`;

export default MainPage;
