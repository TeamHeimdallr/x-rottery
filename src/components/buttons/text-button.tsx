import { ButtonHTMLAttributes } from 'react';
import tw, { styled } from 'twin.macro';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const TextButton = ({ text, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <TextWrapper>{text}</TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.button(() => [
  tw`
    bg-transparent p-0
    border-y-0 border-x-0 border-b-1 border-solid border-white
    flex-center relative
    clickable
    hover:(border-y-0 border-x-0 border-b-1 border-solid border-pink)
  `,
]);

const TextWrapper = styled.div(() => [
  tw`
    font-b-14 text-white
    hover:(text-pink)
  `,
]);
