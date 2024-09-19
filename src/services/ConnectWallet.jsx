import React from "react";
import '@rainbow-me/rainbowkit/styles.css';
import {RainbowKitProvider, midnightTheme} from '@rainbow-me/rainbowkit';
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ConnectWallet = () => {
    
    return (
    <>
        <RainbowKitProvider theme={midnightTheme()}>
            <ConnectButton/>
        </RainbowKitProvider>
    </>
    );
}

export default ConnectWallet;