import type { Meta } from '@storybook/react';
import tw from 'twin.macro';

import { TextButton } from '~/components/buttons';

const meta = {
  title: 'Components/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<typeof TextButton>;

export default meta;

export const _TextButton = args => {
  return (
    <Wrapper>
      <TextButton {...args} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  bg-black
  h-100
`;
