import { useState } from 'react';
import tw, { css, styled } from 'twin.macro';

import slotBg from '~/assets/images/slot-bg.png';
import slotEffect1 from '~/assets/images/slot-effect-1.png';
import slotEffect2 from '~/assets/images/slot-effect-2.png';
import { FilledLargeButton, TextButton } from '~/components/buttons';
import { Gnb } from '~/components/gnb';
import { SlotNumberAutoGenerator } from '~/components/slot-number/auto-generator';
import { SlotNumberManualInput } from '~/components/slot-number/manual-input';
import { MainPreviousTable } from '~/components/tables';
import { useSlotNumberAutoGenerator } from '~/hooks/pages/use-slot-number-auto-generate';
import { useSlotNumberAutoGeneratorStore } from '~/states/components/slot-number-auto.generate';
import { useWalletStore } from '~/states/wallet-info';
import { parseNumberWithComma } from '~/utils/number';

const MainPage = () => {
  const { value, isLoading, reset } = useSlotNumberAutoGeneratorStore();
  const { numbersRef, tick } = useSlotNumberAutoGenerator();

  const [price, setPrice] = useState(1000);

  const { wallet, balance, reset: disconnect } = useWalletStore();

  const [manualized, manualize] = useState(false);
  const isWallet = true;

  const handleClick = () => {
    if (isWallet && !value) {
      tick();
    } else if (isWallet && value) {
      // const result = value.slice(-6);
      // console.log('slot 결과값', result);
      setPrice(prev => prev + 1000);
      manualize(prev => !prev);
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
              isLoading={isLoading}
              text={isWallet ? (value ? 'Buy Ticket' : 'Spin Slots!') : 'Connect Wallet'}
            />
          </ButtonWrapper>
        </Section1>
        <Section2>
          {isWallet && (
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
            <MainPreviousTable />
          </TableWrapper>
        </Section2>
      </Wrapper>
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
