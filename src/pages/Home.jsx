import React from "react";
import ConnectWallet from "../services/connectWallet";

const Home = () => {
    return(
        <>
            {/* <h1>Home Page</h1> */}
            <div>
                <ConnectWallet/>
            </div>
        </>
    );
}

export default Home;