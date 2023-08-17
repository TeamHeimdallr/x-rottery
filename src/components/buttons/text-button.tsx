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
    flex-center relative
    clickable
  `,
]);

const TextWrapper = styled.div(() => [
  tw`
    font-b-14 text-white underline underline-offset-[5px]
    hover:(text-pink)
  `,
]);
