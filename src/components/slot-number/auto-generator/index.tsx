import { HTMLAttributes, MutableRefObject } from 'react';
import tw, { css, styled } from 'twin.macro';

import { COLOR } from '~/assets/colors';
import slotNumberBg from '~/assets/images/slot-number-bg.png';
import { NUM_LENGTH } from '~/hooks/pages/use-slot-number-auto-generate';

interface Props extends HTMLAttributes<HTMLDivElement> {
  numbersRef: MutableRefObject<(HTMLDivElement | null)[]>;
}
export const SlotNumberAutoGenerator = ({ numbersRef, ...rest }: Props) => {
  return (
    <Wrapper style={{ backgroundImage: `url(${slotNumberBg})` }} {...rest}>
      {[...Array(NUM_LENGTH)].map((_, i) => (
        <TextWrapper key={i}>
          <Text ref={ref => numbersRef.current.push(ref)}>?</Text>
        </TextWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-460 h-120 bg-center bg-cover bg-no-repeat flex-center gap-0.5
`;

const TextWrapper = tw.div`
  w-76 h-84 pb-2 flex-center
`;

const Text = styled.div(() => [
  tw`text-center text-white uppercase font-abril-88`,
  css`
    text-shadow: 0px 0px 20px rgba(78, 246, 216, 0.8);
    -webkit-text-stroke: 1px ${COLOR.MINT};
  `,
]);
