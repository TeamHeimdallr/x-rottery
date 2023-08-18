import { format } from 'date-fns';
import tw, { css, styled } from 'twin.macro';

import { DATE_FORMATTER } from '~/utils/time';

import { FilledMediumButton } from '../buttons';
import { SixNumbers } from '../six-numbers';

const header = [
  { value: 'Purchase Date', width: 160 },
  { value: 'My Numbers', width: 504 },
];

const dummyColumns = [{ number: '5B112A', winner: '0xd28f...abce', jackpot: 9999999 }];

interface Props {
  hasTicket?: boolean;
}

export const MyOngoingTable = ({ hasTicket }: Props) => {
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
          {hasTicket ? (
            dummyColumns.map((row, index) => {
              const { number } = row;
              return (
                <div key={index}>
                  <Divider />
                  <Tr>
                    <Datas width={160}>
                      <DateText>{format(Date.now(), DATE_FORMATTER.YYYY_MM_DD_HHMMSS)}</DateText>
                    </Datas>
                    <Datas width={504}>
                      <SixNumbers number={number} />
                    </Datas>
                  </Tr>
                </div>
              );
            })
          ) : (
            <>
              <Divider />
              <NoTicketWrapper>
                <NoTicketText>No XRottery purchased yet.</NoTicketText>
                <FilledMediumButton text={'Buy Ticket'} />
              </NoTicketWrapper>
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
const NoTicketWrapper = tw.div`
  w-full flex flex-col gap-24 items-center pb-16
`;
const NoTicketText = tw.div`
  font-r-14 text-white
`;
