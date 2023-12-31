import { Meta } from '@storybook/react';

import { MyOngoingTable } from '~/components/tables';

const meta = {
  title: 'Components/MyOngoingTable',
  component: MyOngoingTable,
} satisfies Meta<typeof MyOngoingTable>;

export default meta;

export const Table = () => {
  return <MyOngoingTable />;
};
