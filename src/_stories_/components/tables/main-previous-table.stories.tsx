import { Meta } from '@storybook/react';

import { MainPreviousTable } from '~/components/table';

const meta = {
  title: 'Components/MainPreviousTable',
  component: MainPreviousTable,
} satisfies Meta<typeof MainPreviousTable>;

export default meta;

export const Table = () => {
  return <MainPreviousTable />;
};
