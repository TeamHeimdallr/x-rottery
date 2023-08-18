import tw, { css, styled } from 'twin.macro';

import { parseNumberWithComma } from '~/utils/number';
import { truncateAddress } from '~/utils/string';

import { SixNumbers } from '../six-numbers';

const header = [
  { value: 'Round', width: 60 },
  { value: 'Winning Numbers', width: 300 },
  { value: 'Jackpot', width: 144 },
  { value: 'Winner', width: 144 },
];

interface ColumnsProps {
  number: string;
  winner: `r${string}`;
  jackpot: number;
}

const dummyColumns: ColumnsProps[] = [
  { number: '0A1B2C', winner: `r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV`, jackpot: 9999999 },
];

export const MainPreviousTable = () => {
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
          {dummyColumns.map((row, index) => {
            const { jackpot, number, winner } = row;
            return (
              <div key={index}>
                <Divider />
                <Tr>
                  <Datas width={60}>
                    <RoundText>1</RoundText>
                  </Datas>
                  <Datas width={300}>
                    <SixNumbers number={number} />
                  </Datas>
                  <Datas width={144}>
                    <JackpotText>{parseNumberWithComma(jackpot)} XRP</JackpotText>
                  </Datas>
                  <Datas width={144}>{truncateAddress(winner)}</Datas>
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
const RoundText = tw.div`
  font-b-14
`;
const JackpotText = tw.div`
  font-b-14 text-mint
`;
