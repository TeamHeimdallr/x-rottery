import { InputHTMLAttributes } from 'react';
import tw from 'twin.macro';

export const TextField = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Wrapper>
      <TextFieldWrapper {...rest}></TextFieldWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-12
`;
const TextFieldWrapper = tw.input`
  flex items-center h-56 bg-gray4 px-20 py-16 text-white placeholder:text-gray2
  border-none rounded-8 font-r-16
`;
