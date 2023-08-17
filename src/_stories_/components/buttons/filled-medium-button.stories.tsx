import type { Meta, StoryObj } from '@storybook/react';

import { FilledMediumButton } from '~/components/buttons';

const meta = {
  title: 'Components/FilledMediumButton',
  component: FilledMediumButton,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
} satisfies Meta<typeof FilledMediumButton>;
type Story = StoryObj<typeof meta>;

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    text: 'Text here',
  },
};
