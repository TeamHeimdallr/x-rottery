import tw from 'twin.macro';
import { Client, Wallet } from 'xrpl';

import { FilledLargeButton } from '~/components/buttons';

const MainPage = () => {
  const getAccountFromSeeds = async () => {
    const net = 'wss://s.altnet.rippletest.net:51233';
    const client = new Client(net);
    await client.connect();

    const wallet = Wallet.fromSeed('sEdTxNu2nY3EW4iJ2Vg3Tzy3Smvjexu');
    console.log(wallet);
  };

  return (
    <Wrapper>
      <FilledLargeButton text={'Connect Wallet'} onClick={getAccountFromSeeds} />
      <FilledLargeButton text={'Connect Wallet'} onClick={getAccountFromSeeds} />
    </Wrapper>
  );
};

const Wrapper = tw.div``;

export default MainPage;
