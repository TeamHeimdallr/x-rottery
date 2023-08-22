import type { Meta, StoryObj } from '@storybook/react';

import { SlotNumberManualInput } from '~/components/slot-number/manual-input';

const meta = {
  title: 'Components/SlotNumberManualInput',
  component: SlotNumberManualInput,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SlotNumberManualInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SlotNumberManualInput: Story = {
  args: {},
};
