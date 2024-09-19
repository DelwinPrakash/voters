import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultConfig, RainbowKitProvider, midnightTheme} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {QueryClientProvider, QueryClient,} from "@tanstack/react-query";
import { config } from './services/wagmi.js';

import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <RainbowKitProvider theme={midnightTheme()}> */}
          <App/>
        {/* </RainbowKitProvider> */}
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);
