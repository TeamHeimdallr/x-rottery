import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import tw, { css, styled } from 'twin.macro';
import { Client, Wallet, xrpToDrops } from 'xrpl';

import manualBg from '~/assets/images/manual-bg.png';
import slotBg from '~/assets/images/slot-bg.png';
import { FilledLargeButton, TextButton } from '~/components/buttons';
import { Gnb } from '~/components/gnb';
import { ConnectPopup } from '~/components/popups/connect-popup';
import { SuccessPopup } from '~/components/popups/success-popup';
import { SlotNumberAutoGenerator } from '~/components/slot-number/auto-generator';
import { SlotNumberManualInput } from '~/components/slot-number/manual-input';
import { MainPreviousTable } from '~/components/tables';
import { NET, POPUP_ID, RAFFLED } from '~/constants';
import { usePopup } from '~/hooks/pages/use-popup';
import { useSlotNumberAutoGenerator } from '~/hooks/pages/use-slot-number-auto-generate';
import { useSlotNumberAutoGeneratorStore } from '~/states/components/slot-number-auto.generate';
import { useTicketStore } from '~/states/ticket-info';
import { useWalletStore } from '~/states/wallet-info';
import { parseNumberWithComma } from '~/utils/number';
import { DATE_FORMATTER } from '~/utils/time';

const DEPOSIT = 1000;
const OWNER_ADDRESS = 'rPucpCcAQH6mjJrL6PS4Cot2dD2WLoeZkA';

const MainPage = () => {
  const { value } = useSlotNumberAutoGeneratorStore();
  const [isLoading, setIsLoading] = useState<boolean>();
  const { tick, reset, numbersRef } = useSlotNumberAutoGenerator();

  const [price, setPrice] = useState(RAFFLED ? 0 : 1000);

  const { wallet, balance, reset: disconnect } = useWalletStore();
  const { opened, open } = usePopup(POPUP_ID.CONNECT);
  const { opened: openedSuccess, open: openSuccess } = usePopup(POPUP_ID.SUCCESS);
  const { setTicket } = useTicketStore();

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

    setTicket({
      round: 2,
      number: value,
      purchaseDate: format(new Date(), DATE_FORMATTER.YYYY_MM_DD_HHMMSS),
    });
    reset();
  };

  const handleClick = async () => {
    if (!wallet) {
      open();
      return;
    }
    if (value) {
      await buyTicket();
      return;
    }
    tick();
    setIsLoading(true);
  };

  useEffect(() => {
    if (!value) return;
    setIsLoading(false);
  }, [value]);

  return (
    <>
      <Wrapper>
        <Gnb
          address={wallet?.classicAddress as `r${string}`}
          isConnected={!!wallet?.classicAddress}
          xrpBalance={balance}
          disconnect={disconnect}
        />
        <ContentWrapper>
          <Section1>
            <TitleWrapper>
              <TitleText>estimated jackpot</TitleText>
              <JackpotText>{parseNumberWithComma(price)} XRP</JackpotText>
              <DateText>Draw Date:Friday, July 28, 2023</DateText>
            </TitleWrapper>
            <SlotEffect src={manualized ? manualBg : slotBg} />
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
            <ModeButtonWrapper>
              {wallet && (
                <TextButton
                  onClick={() => manualize(prev => !prev)}
                  text={manualized ? 'Spin Slots' : 'Enter Manually'}
                />
              )}
            </ModeButtonWrapper>
            <TableWrapper>
              <RoundText>Previous Round</RoundText>
              <MainPreviousTable raffled={RAFFLED} />
            </TableWrapper>
          </Section2>
        </ContentWrapper>
      </Wrapper>
      {opened && <ConnectPopup />}
      {openedSuccess && (
        <SuccessPopup
          text={'You have successfully purchased a lottery ticket. Good luck!'}
          onClick={() => setPrice(prev => prev + 1000)}
        />
      )}
    </>
  );
};

const Wrapper = tw.div`
  w-full flex flex-col items-center relative
`;

const ContentWrapper = tw.div`
  absolute top-20 bg-black
`;

const Section1 = tw.div`
  w-1440 min-h-750 bg-center bg-cover bg-no-repeat flex flex-col
  flex flex-col justify-between
`;

const Section2 = tw.div`
  w-1440 h-full pb-196
  flex flex-col items-center gap-120
`;

const SlotWrapper = tw.div`
  flex flex-center absolute
  top-340 inset-x-1/2
`;

const TitleWrapper = tw.div`
  flex flex-col flex-center z-1 mt-70
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

const SlotEffect = styled.img(() => [tw`h-750 absolute top-0 object-cover`]);

const ModeButtonWrapper = tw.div`h-22`;

export default MainPage;
