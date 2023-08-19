import tw, { css, styled } from 'twin.macro';

import { parseNumberWithComma } from '~/utils/number';
import { truncateAddress } from '~/utils/string';

import { SixNumbers } from '../six-numbers';
import { previousWinningData, winerNewData } from './data';

const header = [
  { value: 'Round', width: 60 },
  { value: 'Winning Numbers', width: 300 },
  { value: 'Jackpot', width: 144 },
  { value: 'Winner', width: 144 },
];

interface Props {
  raffled: boolean;
}
export const MainPreviousTable = ({ raffled }: Props) => {
  const data = raffled ? [winerNewData, ...previousWinningData] : previousWinningData;
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
            const { jackpot, number, winner, round } = row;
            if (!jackpot) return;
            return (
              <div key={index}>
                <Divider />
                <Tr>
                  <Datas width={60}>
                    <RoundText>{round}</RoundText>
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
