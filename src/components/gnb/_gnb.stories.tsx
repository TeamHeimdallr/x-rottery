import type { Meta, StoryObj } from '@storybook/react';

import { Gnb } from '.';

const meta = {
  title: 'Components/Gnb',
  component: Gnb,
  tags: ['autodocs'],
  argTypes: {
    isConnected: { control: { type: 'boolean' } },
    address: { control: { type: 'text' } },
    xrpBalance: { control: { type: 'text' } },
    disconnect: { control: { type: 'function' } },
  },
} satisfies Meta<typeof Gnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Gnb: Story = {
  args: {
    isConnected: true,
    address: 'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV',
    xrpBalance: '000,000.00',
    disconnect: () => console.log('disconnect'),
  },
};
