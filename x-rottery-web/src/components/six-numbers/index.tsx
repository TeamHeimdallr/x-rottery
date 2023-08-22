import tw, { css, styled } from 'twin.macro';

interface SixNumbersProps {
  number: string;
}

export const SixNumbers = ({ number }: SixNumbersProps) => {
  return (
    <Wrapper>
      {number.split('').map((n, i) => (
        <TextWrapper key={i}>
          <Text>{n}</Text>
        </TextWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-4 
`;

const TextWrapper = styled.div(() => [
  tw`flex flex-center w-32 h-32 rounded-4`,
  css`
    background: linear-gradient(
      180deg,
      #98fefe 6.77%,
      #82c6e8 8.85%,
      rgba(8, 1, 23, 0.8) 41.67%,
      #101c26 89.06%,
      #5b8fb7 100%
    );
  `,
]);

const Text = styled.div(() => [
  tw`font-abril-22 text-white text-center`,
  css`
    text-shadow: 0px 0px 6px rgba(78, 246, 216, 0.6);
  `,
]);
