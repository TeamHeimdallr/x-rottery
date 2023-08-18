import type { Meta, StoryObj } from '@storybook/react';

import { ConnectPopup } from '~/components/popups/connect-popup';

const meta = {
  title: 'Components/ConnectPopup',
  component: ConnectPopup,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    text: { control: 'text' },
    type: { control: 'text' },
  },
} satisfies Meta<typeof ConnectPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PopUp: Story = {
  args: {},
};
