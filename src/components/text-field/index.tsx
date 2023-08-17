import { ChangeEvent, InputHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField = ({ placeholder, onChange, ...rest }: Props) => {
  return (
    <Wrapper>
      <TextFieldWrapper placeholder={placeholder} onChange={onChange} {...rest}></TextFieldWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-12
`;
const TextFieldWrapper = tw.input`
  flex items-center h-56 bg-gray4 px-20 py-16 text-white placeholder:text-gray2
  border-none rounded-8 font-r-16 caret-pink
`;
