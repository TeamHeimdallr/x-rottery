import { InputHTMLAttributes } from 'react';
import tw, { css, styled } from 'twin.macro';

import { COLOR } from '~/assets/colors';
import slotInputBg from '~/assets/images/slot-input-bg.png';
import { useSlotNumberManualInput } from '~/hooks/pages/use-slot-number-manual-input';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}
export const SlotNumberManualInput = ({ ...rest }: Props) => {
  const { numbersRef, value, handleChange } = useSlotNumberManualInput();

  return (
    <Wrapper style={{ backgroundImage: `url(${slotInputBg})` }} {...rest}>
      {[...Array(6)].map((_, i) => (
        <InputWrapper key={i} tabIndex={i}>
          <Input
            ref={ref => numbersRef.current.push(ref)}
            placeholder={'0'}
            value={value[i] ?? ''}
            onChange={e => handleChange(e, i)}
          />
        </InputWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-460 h-120 bg-center bg-cover bg-no-repeat flex-center gap-0.5
`;

const InputWrapper = tw.div`
  w-76 h-84 pb-2 flex-center
`;

const Input = styled.input(() => [
  tw`h-full text-center text-white uppercase bg-transparent border-none w-76 font-abril-88`,
  css`
    text-shadow: 0px 0px 8px rgba(78, 246, 216, 0.8);
    caret-color: ${COLOR.MINT};

    -webkit-text-stroke: 1px ${COLOR.MINT};

    &:focus {
      &::placeholder {
        color: transparent;
      }
    }
    &::placeholder {
      text-shadow: none;
      -webkit-text-stroke: 0px;
    }
  `,
]);
