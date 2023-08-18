import { useRef, useState } from 'react';
import tw from 'twin.macro';
import { useOnClickOutside } from 'usehooks-ts';
import { Client, Wallet } from 'xrpl';

import { COLOR } from '~/assets/colors';
import { NET, POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useWalletStore } from '~/states/wallet-info';

import { FilledMediumButton } from '../buttons';
import { CancelButton } from '../buttons/cancel-button';
import { IconWallet } from '../icons';
import { TextField } from '../text-field';

export const ConnectPopup = () => {
  const popupRef = useRef<HTMLDivElement>(null);
  const { close } = usePopup(POPUP_ID.CONNECT);
  useOnClickOutside(popupRef, close);

  const { setWallet, setBalance } = useWalletStore();
  const [connectingLoading, setConnectingLoading] = useState<boolean>();
  const [creatingLoading, setCreatingLoading] = useState<boolean>();

  const [seed, setSeed] = useState<string>();

  const connect = async (mode: string) => {
    if (mode === 'connect') {
      setConnectingLoading(true);
    } else setCreatingLoading(true);

    const client = new Client(NET);
    await client.connect();

    return { client };
  };

  const getWalletInfo = async (client: Client, wallet: Wallet) => {
    const balance = await client.getXrpBalance(wallet.address);
    setWallet(wallet);
    setBalance(balance.toString());
    client.disconnect();
    close();
  };

  const connectWallet = async () => {
    if (!seed) return;
    const { client } = await connect('connect');
    const wallet = Wallet.fromSeed(seed);
    await getWalletInfo(client, wallet);
  };

  const createWallet = async () => {
    const { client } = await connect('create');
    const wallet = (await client.fundWallet(null)).wallet;
    await getWalletInfo(client, wallet);
  };

  return (
    <Wrapper>
      <PopupWrapper ref={popupRef}>
        <ConnectWrapper>
          <ConnectTitleWrapper>
            <Title>Connect XRP wallet</Title>
            <IconWrapper onClick={close}>
              <CancelButton />
            </IconWrapper>
          </ConnectTitleWrapper>
          <TextField
            placeholder="Enter your private key"
            onChange={e => setSeed(e.target.value)}
            value={seed}
          />
        </ConnectWrapper>

        <ButtonWrapper>
          <FilledMediumButton
            text="Connect"
            onClick={connectWallet}
            isLoading={connectingLoading}
            disabled={!seed || creatingLoading}
          />
          {!connectingLoading && (
            <CreateWalletWrapper onClick={createWallet}>
              <IconWallet color={COLOR.GRAY2} width={20} height={20} />
              <CreateWalletText>Create a new Wallet</CreateWalletText>
            </CreateWalletWrapper>
          )}
        </ButtonWrapper>
      </PopupWrapper>
      <Dim />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

const PopupWrapper = tw.div`
  w-480 fixed flex flex-col bg-gray5 z-11 absolute-center rounded-20 p-20 gap-32
`;

const ConnectWrapper = tw.div`
  flex flex-col gap-20
`;

const ConnectTitleWrapper = tw.div`
  flex w-full h-40 items-center justify-between
`;

const Title = tw.div`
  font-b-18 text-white
`;

const IconWrapper = tw.div`
  flex flex-center clickable
`;

const Dim = tw.div`
  fixed w-screen h-screen bg-[#000000]/60 z-10 top-0 left-0
`;

const ButtonWrapper = tw.div`
  flex flex-col w-full flex-center gap-16
`;

const CreateWalletWrapper = tw.div`
  flex gap-4 clickable relative
`;

const CreateWalletText = tw.div`
  font-r-12 text-gray2 text-center
`;
