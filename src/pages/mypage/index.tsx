import tw, { css, styled } from 'twin.macro';

import { Gnb } from '~/components/gnb';
import { MyOngoingTable, MyPreviousTable } from '~/components/tables';

// TODO : 촬영 시 dummy 값 변경

const dummy = {
  drawDate: 'Sunday, August 27, 2023', // 추첨날짜
  hasTicket: true, // Ongoing Round 표시 여부
  hasPrevious: true, // Previous 표시 여부
};

const MyPage = () => {
  return (
    <Wrapper>
      <Gnb />
      <PageWrapper>
        <PageTitleWrapper>
          <PageTitle>My Page</PageTitle>
        </PageTitleWrapper>
        <BodyWrapper>
          <RoundWrapper>
            <RoundTitleWrapper>
              <RoundTitle>Ongoing Round</RoundTitle>
              <DateText>{dummy.drawDate}</DateText>
            </RoundTitleWrapper>
            <TableWrapper>
              <MyOngoingTable hasTicket={dummy.hasTicket} />
            </TableWrapper>
          </RoundWrapper>
          <RoundWrapper>
            <RoundTitleWrapper>
              <RoundTitle>Previous Round</RoundTitle>
            </RoundTitleWrapper>
            <TableWrapper>
              <MyPreviousTable hasPrevious={dummy.hasPrevious} />
            </TableWrapper>
          </RoundWrapper>
        </BodyWrapper>
      </PageWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex flex-col flex-center bg-black overflow-y-auto
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
