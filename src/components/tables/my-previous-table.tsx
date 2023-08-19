import { format } from 'date-fns';
import tw, { css, styled } from 'twin.macro';

import { parseNumberWithComma } from '~/utils/number';
import { DATE_FORMATTER } from '~/utils/time';

import { SixNumbers } from '../six-numbers';
import { previousData, testerNewData, winerNewData } from './data';

interface Props {
  raffled?: boolean;
  winning?: boolean;
}

export const MyPreviousTable = ({ raffled, winning }: Props) => {
  const newData = winning ? winerNewData : testerNewData;
  const data = raffled ? [newData, ...previousData] : previousData;

  const header = [
    { value: 'Purchase Date', width: 140 },
    { value: 'Round', width: 48 },
    { value: 'My Numbers', width: 230 },
    { value: 'Jackpot', width: 230 },
  ];

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
          {data.map((row, index) => {
            const { number, jackpot, purchaseDate, round } = row;
            if (!purchaseDate) return;
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
                    <RoundText>{round}</RoundText>
                  </Datas>
                  <Datas width={230}>
                    <SixNumbers number={number} />
                  </Datas>
                  <Datas width={230}>
                    <Container>
                      {jackpot ? (
                        <JackpotText>{parseNumberWithComma(jackpot)} XRP</JackpotText>
                      ) : (
                        <NothingToClaimText>Try next time</NothingToClaimText>
                      )}
                    </Container>
                  </Datas>
                </Tr>
              </div>
            );
          })}
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
