import type { Meta, StoryObj } from '@storybook/react';

import { Popup } from '~/components/popups';

const meta = {
  title: 'Components/Popup',
  component: Popup,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
  },
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PopUp: Story = {
  args: {
    id: 'popup',
    text: 'You have successfully purchased a lottery ticket. Good luck!',
  },
};
