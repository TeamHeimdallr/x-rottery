import type { Meta, StoryObj } from '@storybook/react';

import { SlotNumberAutoGenerator } from '.';

const meta = {
  title: 'Components/SlotNumberAutoGenerator',
  component: SlotNumberAutoGenerator,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SlotNumberAutoGenerator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SlotNumberAutoGenerator: Story = {
  args: {},
};