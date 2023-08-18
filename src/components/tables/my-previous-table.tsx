import { format } from 'date-fns';
import tw, { css, styled } from 'twin.macro';

import { parseNumberWithComma } from '~/utils/number';
import { DATE_FORMATTER } from '~/utils/time';

import { SixNumbers } from '../six-numbers';

const header = [
  { value: 'Purchase Date', width: 140 },
  { value: 'Round', width: 48 },
  { value: 'My Numbers', width: 230 },
  { value: 'Jackpot', width: 230 },
];

const dummyColumns = [
  {
    number: '0A1B2C',
    winner: '0xd28f...abce',
    jackpot: 9999999,
    isJactpot: false,
    purchaseDate: '2023-08-09 20:44:12',
  },
  {
    number: '83DD00',
    winner: '0xd28f...abce',
    jackpot: 9999999,
    isJackpot: true,
    purchaseDate: '2023-08-10 13:12:57',
  },
];

interface Props {
  hasPrevious?: boolean;
}

export const MyPreviousTable = ({ hasPrevious }: Props) => {
  return (
    <Wrapper>
      <TableWrapper>
        <THead>
          {header.map(h => (
            <Datas key={h.value} width={h.width}>
              {h.value}
            </Datas>
          ))}
        </THead>
        <TBody>
          {hasPrevious ? (
            dummyColumns.map((row, index) => {
              const { number, jackpot, isJackpot, purchaseDate } = row;
              return (
                <div key={index}>
                  <Divider />
                  <Tr>
                    <Datas width={140}>
                      <DateText>
                        {format(new Date(purchaseDate), DATE_FORMATTER.YYYY_MM_DD_HHMMSS)}
                      </DateText>
                    </Datas>
                    <Datas width={48}>
                      <RoundText>1</RoundText>
                    </Datas>
                    <Datas width={230}>
                      <SixNumbers number={number} />
                    </Datas>
                    <Datas width={230}>
                      <Container>
                        {isJackpot ? (
                          <JackpotText>{parseNumberWithComma(jackpot)} XRP</JackpotText>
                        ) : (
                          <NothingToClaimText>Try next time</NothingToClaimText>
                        )}
                      </Container>
                    </Datas>
                  </Tr>
                </div>
              );
            })
          ) : (
            <>
              <Divider />
              <NoPreviousWrapper>No XRottery</NoPreviousWrapper>
            </>
          )}
        </TBody>
      </TableWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.article`
  w-720
  rounded-8 bg-gray5 text-white font-r-14
  p-24
`;

const TableWrapper = tw.div`
  w-full
`;

interface TableProps {
  width?: number;
}

const Datas = styled.div<TableProps>(({ width }) => [
  tw`flex flex-center`,
  css`
    width: ${width}px;
  `,
]);

const THead = tw.div`
  flex gap-8
`;

const TBody = tw.div`
  w-full
`;
const Tr = tw.div`
  flex gap-8 
`;
const Divider = tw.div`
  h-1 w-full bg-gray4
  my-24 
`;

const DateText = tw.div`
  font-r-14 text-gray2
`;
const RoundText = tw.div`
  font-b-14
`;
const JackpotText = tw.div`
  w-136 flex-center font-b-14 text-mint
`;

const Container = tw.div`
  flex-center gap-8
`;
const NothingToClaimText = tw.span`
  font-b-14 text-gray3 
`;
const NoPreviousWrapper = tw.div`
  w-full flex-center pb-16
`;
