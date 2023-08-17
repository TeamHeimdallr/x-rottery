import { format } from 'date-fns';
import tw, { css, styled } from 'twin.macro';

import { parseNumberWithComma } from '~/utils/number';
import { DATE_FORMATTER } from '~/utils/time';

import { FilledMediumButton } from '../buttons';
import { SixNumbers } from '../six-numbers';

interface TableProps {
  value?: string;
  width?: number;
}

const Header = [
  { value: 'Purchase Date', width: 140 },
  { value: 'Round', width: 48 },
  { value: 'My Numbers', width: 230 },
  { value: 'Jackpot', width: 230 },
];

const ColumnsDummy = [
  { number: '0A1B2C', winner: '0xd28f...abce', jackpot: 9999999 },
  { number: '0A1B2C', winner: '0xd28f...abce', jackpot: 9999999 },
  { number: '83DD00', winner: '0xd28f...abce', jackpot: 9999999 },
  { number: '4314A1', winner: '0xd28f...abce', jackpot: 9999999 },
  { number: '55023C', winner: '0xd28f...abce', jackpot: 9999999 },
  { number: '646517', winner: '0xd28f...abce', jackpot: 9999999 },
  { number: 'DA214F', winner: '0xd28f...abce', jackpot: 9999999 },
];

interface Props {
  claimed?: boolean;
  isJackpot?: boolean;
}

export const MyPreviousTable = ({ isJackpot, claimed }: Props) => {
  return (
    <Wrapper>
      <TableWrapper>
        <THead>
          {Header.map(h => (
            <Datas key={h.value} width={h.width}>
              {h.value}
            </Datas>
          ))}
        </THead>
        <TBody>
          {ColumnsDummy.map((row, index) => {
            const { number, jackpot } = row;
            return (
              <>
                <Divider />
                <Tr>
                  <Datas width={140}>
                    <DateText>{format(Date.now(), DATE_FORMATTER.YYYY_MM_DD_HHMMSS)}</DateText>
                  </Datas>
                  <Datas width={48}>
                    <RoundText>{index + 1}</RoundText>
                  </Datas>
                  <Datas width={230}>
                    <SixNumbers number={number} />
                  </Datas>
                  <Datas width={230}>
                    <Container>
                      {isJackpot ? (
                        claimed ? (
                          <>
                            <JackpotText>{parseNumberWithComma(jackpot)} XRP</JackpotText>
                            <ButtonWrapper>
                              <FilledMediumButton text="Claim" />
                            </ButtonWrapper>
                          </>
                        ) : (
                          <>
                            <JackpotText>{parseNumberWithComma(jackpot)} XRP</JackpotText>
                            <ButtonWrapper>
                              <FilledMediumButton text="Claim" disabled />
                            </ButtonWrapper>
                          </>
                        )
                      ) : (
                        <NothingToClaimText>Nothing to Claim</NothingToClaimText>
                      )}
                    </Container>
                  </Datas>
                </Tr>
              </>
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
const Tr = tw.tr`
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
  font-b-16
`;
const JackpotText = tw.div`
  w-136 flex-center font-b-16 text-mint
`;
const ButtonWrapper = tw.div`
  w-86
`;
const Container = tw.div`
  flex-center gap-8
`;
const NothingToClaimText = tw.span`
  font-b-14 text-gray3 
`;
