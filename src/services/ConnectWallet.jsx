import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const ConnectWallet = () => {
    const [account, setAccount] = useState(null);
    const isWalletConnected = Boolean(account);
    
    const walletConnect = async () => {
        if(window.ethereum){
            try{
                const accounts = await window.ethereum.request({
                    method:'eth_requestAccounts'
                });
                setAccount(accounts[0]);
                console.log("Connect A/C: ", accounts[0]);
            }catch(error){
                console.error("Error", error);
            }
        }else{
            alert("Install MetaMask on your device!");
        }
    }

    // const getBalance = async (address) => {
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const balance = await provider.getBalance(address);
    //     const balanceInEth = ethers.util.formateEther(balance);
    //     console.log(balanceInEth);
    // }

    // useEffect(() => {
    //     const checkConnection = async () => {
    //         if(window.ethereum){
    //             const accounts = await window.ethereum.request({
    //                 method:'eth_accounts'
    //             });
    //             if(accounts.length > 0){
    //                 setAccount(accounts[0]);
    //             }
    //         }
    //     };
    //     checkConnection();
    // }, []);

    return (
        <>
        <div className="bg-gray-900 m-5 rounded-lg py-3 flex flex-col items-center">
            {account ? (
                <h3 className="mt-2">{account}</h3>
            ) : (
                <div className="flex flex-col items-center">
                    <p>CONNECT YOUR METAMASK WALLET</p>
                    <button onClick={walletConnect} className="mt-5 w-20 h-10 rounded-lg bg-white text-black">Connect</button>
                </div>
            )}

            {/* <p>CONNECT YOUR METAMASK WALLET</p>
            <button onClick={walletConnect} className="mt-5 w-20 h-10 rounded-lg bg-white text-black">Connect</button>
            <h3 className="mt-2">{account}</h3> */}
        </div>
    </>
    );
}

export default ConnectWallet;