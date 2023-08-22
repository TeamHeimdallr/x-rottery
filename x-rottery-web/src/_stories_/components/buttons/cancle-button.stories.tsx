import { Meta } from '@storybook/react';

import { CancelButton } from '~/components/buttons/cancel-button';

const meta = {
  title: 'Components/CancelButton',
  component: CancelButton,
} satisfies Meta<typeof CancelButton>;

export default meta;

export const Button = () => {
  return <CancelButton />;
};
