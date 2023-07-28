import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3Modal } from '@web3modal/react';
import { WagmiConfig } from 'wagmi';

import { ethereumClient, projectId, wagmiConfig } from '~/configs/setup-wallet';

import MainPage from '.';

const meta = {
  title: 'Pages/Main',
  component: MainPage,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const queryClient = new QueryClient();
export const _MainPage: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <MainPage />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </QueryClientProvider>
  ),
  args: {},
};
