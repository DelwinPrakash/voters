import React from "react";
import { useAccount } from "wagmi";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const {address} = useAccount();
    const isWalletConnected = Boolean(address);

    if(!isWalletConnected){
        return <Navigate to={'/'}/>
    }

    return(
        <div>
            <p>Profile page</p>
        </div>
    );
}

export default Profile;