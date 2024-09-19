import React from "react";
import ConnectWallet from "../services/connectWallet";
import { useAccount } from "wagmi";

const Home = () => {
    const {address} = useAccount();
    const isWalletConnected = Boolean(address);
    
    return(
    <>
        <div className="bg-gray-900 m-5 rounded-lg py-3 flex flex-col items-center">
            {isWalletConnected ? <ConnectWallet/> : 
                <div className="flex flex-col items-center">
                    <p>Connect wallet to continue</p><br/>
                    <ConnectWallet/>
                </div>
            }
        </div>
    </>
    );
}

export default Home;