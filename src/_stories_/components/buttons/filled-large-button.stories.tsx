import type { Meta, StoryObj } from '@storybook/react';

import { FilledLargeButton } from '~/components/buttons';

const meta = {
  title: 'Components/FilledLargeButton',
  component: FilledLargeButton,
  argTypes: {
    text: { control: 'text' },
    isLoading: { control: 'boolean' },
  },
} satisfies Meta<typeof FilledLargeButton>;
type Story = StoryObj<typeof meta>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    text: 'Text here',
  },
};
