import type { Meta, StoryObj } from '@storybook/react';

import { SuccessPopup } from './success-popup';

const meta = {
  title: 'Components/SuccessPopup',
  component: SuccessPopup,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<typeof SuccessPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PopUp: Story = {
  args: {
    text: 'You have successfully purchased a lottery ticket. Good luck!',
  },
};
