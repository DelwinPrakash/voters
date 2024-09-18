import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@rainbow-me/rainbowkit/styles.css';
import {RainbowKitProvider,} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {QueryClientProvider} from "@tanstack/react-query";
import { config } from './services/wagmi.js';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
