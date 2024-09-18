import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultConfig} from '@rainbow-me/rainbowkit';
import {mainnet, polygon, optimism, arbitrum, base,} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'voters',
  projectId: 'd12af1cfadb86a9c3bb3371d8d342139',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});