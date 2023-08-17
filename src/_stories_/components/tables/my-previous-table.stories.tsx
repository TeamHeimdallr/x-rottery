import { Meta } from '@storybook/react';

import { MyPreviousTable } from '~/components/table';

const meta = {
  title: 'Components/MyPreviousTable',
  component: MyPreviousTable,
  argTypes: {
    isJackpot: { control: 'boolean' },
    claimed: { control: 'boolean' },
  },
} satisfies Meta<typeof MyPreviousTable>;

export default meta;

export const Table = arg => {
  return <MyPreviousTable {...arg} />;
};