import type { Meta, StoryObj } from '@storybook/react';
import tw from 'twin.macro';

import * as IconSvg from '~/components/icons';

const meta = {
  title: 'Components/Icon',
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type: 'color' } },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Icons: Story = {
  render: () => (
    <IconWrapper>
      <IconSvg.IconActive />
      <IconSvg.IconArrowDown />
      <IconSvg.IconCancle />
      <IconSvg.IconCheck />
      <IconSvg.IconDown />
      <IconSvg.IconLocked />
      <IconSvg.IconLogout />
      <IconSvg.IconNext />
      <IconSvg.IconPercentage />
      <IconSvg.IconPrice />
      <IconSvg.IconTotal />
    </IconWrapper>
  ),
};

const IconWrapper = tw.div`
  grid grid-cols-6 gap-16
`;
