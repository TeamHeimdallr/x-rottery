import { useState } from 'react';
import tw, { css, styled } from 'twin.macro';
import { Client, Wallet, xrpToDrops } from 'xrpl';

import slotBg from '~/assets/images/slot-bg.png';
import slotEffect1 from '~/assets/images/slot-effect-1.png';
import slotEffect2 from '~/assets/images/slot-effect-2.png';
import { FilledLargeButton, TextButton } from '~/components/buttons';
import { Gnb } from '~/components/gnb';
import { ConnectPopup } from '~/components/popups/connect-popup';
import { SuccessPopup } from '~/components/popups/success-popup';
import { SlotNumberAutoGenerator } from '~/components/slot-number/auto-generator';
import { SlotNumberManualInput } from '~/components/slot-number/manual-input';
import { MainPreviousTable } from '~/components/tables';
import { NET, POPUP_ID } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useSlotNumberAutoGenerator } from '~/hooks/pages/use-slot-number-auto-generate';
import { useSlotNumberAutoGeneratorStore } from '~/states/components/slot-number-auto.generate';
import { useWalletStore } from '~/states/wallet-info';
import { parseNumberWithComma } from '~/utils/number';

const DEPOSIT = 1;
const OWNER_ADDRESS = 'rPucpCcAQH6mjJrL6PS4Cot2dD2WLoeZkA';

const MainPage = () => {
  // TODO : 당첨 전후로 변경하기
  const raffled = true;

  const { isLoading, value } = useSlotNumberAutoGeneratorStore();
  const { tick, numbersRef, reset } = useSlotNumberAutoGenerator();

  const [price, setPrice] = useState(raffled ? 2000 : 1000);

  const { wallet, balance, reset: disconnect } = useWalletStore();
  const { opened } = usePopup(POPUP_ID.CONNECT);
  const { opened: openedSuccess, open: openSuccess } = usePopup(POPUP_ID.SUCCESS);

  const [manualized, manualize] = useState(false);
  const [buyingLoading, setBuyingLoading] = useState<boolean>();

  const connect = async () => {
    setBuyingLoading(true);
    const client = new Client(NET);
    await client.connect();
    return { client };
  };

  const buyTicket = async () => {
    if (!wallet?.classicAddress || !wallet.seed || !value) return;
    const { client } = await connect();

    const prepared = await client.autofill({
      TransactionType: 'Payment',
      Account: wallet?.classicAddress,
      Amount: xrpToDrops(DEPOSIT),
      Destination: OWNER_ADDRESS,
      Memos: [{ Memo: { MemoData: value } }],
    });

    const signed = Wallet.fromSeed(wallet.seed).sign(prepared);
    const tx = await client.submitAndWait(signed.tx_blob);
    console.log(tx);

    setBuyingLoading(false);
    client.disconnect();
    openSuccess();
    reset();
  };

  const handleClick = () => {
    if (wallet && !value) {
      tick();
    } else if (wallet && value) {
      setPrice(prev => prev + 1000);
      buyTicket();
    }
  };

  return (
    <>
      <Wrapper>
        <Gnb
          address={wallet?.classicAddress as `r${string}`}
          isConnected={!!wallet?.classicAddress}
          xrpBalance={balance}
          disconnect={disconnect}
        />
        <Section1>
          <Article>
            <TitleWrapper>
              <TitleText>estimated jackpot</TitleText>
              <JackpotText>{parseNumberWithComma(price)} XRP</JackpotText>
              <DateText>Draw Date:Friday, July 28, 2023</DateText>
            </TitleWrapper>
          </Article>
          <SlotEffect isBackground src={slotBg} />
          {!manualized && (
            <>
              <SlotEffect src={slotEffect1} />
              <SlotEffect secondEffect src={slotEffect2} />
            </>
          )}
          <SlotWrapper>
            {manualized ? (
              <SlotNumberManualInput />
            ) : (
              <SlotNumberAutoGenerator numbersRef={numbersRef} />
            )}
          </SlotWrapper>
          <ButtonWrapper>
            <FilledLargeButton
              onClick={handleClick}
              isLoading={isLoading || buyingLoading}
              text={wallet ? (value ? 'Buy Ticket' : 'Spin Slots!') : 'Connect Wallet'}
            />
          </ButtonWrapper>
        </Section1>
        <Section2>
          {wallet && (
            <div>
              <Divider />
              <TextButton
                onClick={() => manualize(prev => !prev)}
                text={manualized ? 'Spin Slots' : 'Enter Manually'}
              />
            </div>
          )}
          <TableWrapper>
            <RoundText>Previous Round</RoundText>
            <MainPreviousTable raffled={raffled} />
          </TableWrapper>
        </Section2>
      </Wrapper>
      {opened && <ConnectPopup />}
      {openedSuccess && (
        <SuccessPopup text={'You have successfully purchased a lottery ticket. Good luck!'} />
      )}
    </>
  );
};

const Wrapper = tw.div`
  w-full flex flex-col items-center
  relative 
`;

const Section1 = tw.section`
  mt-90 w-1440 min-h-810 bg-center bg-cover bg-no-repeat flex flex-col relative
  flex flex-col justify-between
`;

const Section2 = tw.section`
  w-1440 min-h-810 h-full pb-196
  flex flex-col items-center gap-120
`;

const SlotWrapper = tw.div`
  flex flex-center absolute
  top-400 inset-x-1/2
`;

const Article = tw.article`
  flex flex-col gap-10 relative z-1
`;
const TitleWrapper = tw.div`
  flex flex-col flex-center
  py-24 px-50
`;

const TitleText = tw.div`
  font-dela-b-16 text-white uppercase
`;

const JackpotText = tw.div`
  font-dela-b-40 text-mint
`;

const DateText = tw.div`
  font-b-14 text-white
`;

const ButtonWrapper = tw.div`
  flex flex-center mb-20
`;

const RoundText = styled.div(() => [
  tw`
    font-dela-b-28 text-mint text-center
  `,
  css`
    text-shadow: 0px 0px 24px #4ef6d8;
  `,
]);

const TableWrapper = tw.div`
  flex flex-col gap-40
`;
const Divider = tw.div`
  mt-4
`;

interface Props {
  secondEffect?: boolean;
  isBackground?: boolean;
}

const SlotEffect = styled.img<Props>(({ secondEffect, isBackground }) => [
  tw`absolute z-0`,
  secondEffect && tw`w-1440 h-810`,
  isBackground && tw`w-1440 h-810`,
]);

export default MainPage;
