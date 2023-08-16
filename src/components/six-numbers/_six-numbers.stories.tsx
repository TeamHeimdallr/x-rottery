import type { Meta, StoryObj } from '@storybook/react';

import { SixNumbers } from '.';

const meta = {
  title: 'Components/SixNumbers',
  component: SixNumbers,
  tags: ['autodocs'],
  argTypes: {
    number: { control: 'text' },
  },
} satisfies Meta<typeof SixNumbers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SixNumbers: Story = {
  args: {
    number: '123456',
  },
};
