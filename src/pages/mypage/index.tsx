import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import tw, { css, styled } from 'twin.macro';

import { Gnb } from '~/components/gnb';
import { MyOngoingTable, MyPreviousTable } from '~/components/tables';
import { RAFFLED } from '~/constants';
import { useWalletStore } from '~/states/wallet-info';

// TODO : 촬영 시 testInfo 값 변경
const testInfo = {
  drawDate: 'Monday, August 21, 2023', // 추첨날짜
  raffled: RAFFLED, // 당첨 전과 후 표시
};

const MyPage = () => {
  const { wallet, balance, reset } = useWalletStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!wallet) navigate('/');
  }, [navigate, wallet]);

  return (
    <Wrapper>
      <Gnb
        address={wallet?.classicAddress as `r${string}`}
        isConnected={!!wallet?.classicAddress}
        xrpBalance={balance}
        disconnect={reset}
      />
      <PageWrapper>
        <PageTitleWrapper>
          <PageTitle>My Page</PageTitle>
        </PageTitleWrapper>
        <BodyWrapper>
          <RoundWrapper>
            <RoundTitleWrapper>
              <RoundTitle>Ongoing Round</RoundTitle>
              <DateText>{testInfo.drawDate}</DateText>
            </RoundTitleWrapper>
            <TableWrapper>
              <MyOngoingTable raffled={testInfo.raffled} />
            </TableWrapper>
          </RoundWrapper>
          <RoundWrapper>
            <RoundTitleWrapper>
              <RoundTitle>Previous Round</RoundTitle>
            </RoundTitleWrapper>
            <TableWrapper>
              <MyPreviousTable raffled={testInfo.raffled} />
            </TableWrapper>
          </RoundWrapper>
        </BodyWrapper>
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex flex-col flex-center bg-black overflow-y-auto relative
`;
const PageWrapper = tw.div`
  w-full h-full flex flex-col pt-160 max-w-720 gap-40
`;

const PageTitleWrapper = tw.div`
  w-full flex
`;

const PageTitle = styled.div(() => [
  tw`font-dela-b-28 text-mint text-center`,
  css`
    text-shadow: 0px 0px 24px #4ef6d8;
  `,
]);
const BodyWrapper = tw.div`
  flex flex-col gap-60 items-center pb-200
`;

const RoundWrapper = tw.div`
  w-full flex flex-col gap-24
`;

const RoundTitleWrapper = tw.div`
  w-full flex justify-between items-center
`;

const RoundTitle = tw.div`
  font-b-20 text-white text-center
`;

const DateText = tw.div`
  font-b-14 text-white text-center
`;

const TableWrapper = tw.div`
`;
export default MyPage;
