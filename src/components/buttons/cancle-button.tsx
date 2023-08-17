import { ButtonHTMLAttributes } from 'react';
import tw, { css, styled } from 'twin.macro';

import { COLOR } from '~/assets/colors';

import { IconCancle } from '../icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CancleButton = ({ ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <IconCancle color={COLOR.GRAY2} />
    </Wrapper>
  );
};

const Wrapper = styled.button(() => [
  tw`
    w-40 h-40 flex-center clickable rounded-full
    bg-gray5
    hover:(bg-gray4)
  `,
  css`
    &:hover {
      svg {
        path {
          fill: ${COLOR.GRAY1};
        }
      }
    }
  `,
]);
