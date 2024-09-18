import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = (route) => {
        navigate(route);
    };
    return (
        <div className="fixed left-0 right-0 bottom-0 bg-gray-800 text-white flex justify-around h-20">
            <div onClick={()=>{handleClick('/')}} className="flex flex-col items-center justify-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-house w-10 h-10" viewBox="0 0 16 16">
                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                    </svg>
                </span>
                <span>Home</span>
            </div>
            <div onClick={()=>{handleClick('/profile')}} className="flex flex-col items-center justify-center">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle w-10 h-10" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                </span>
                <span>Profile</span>
            </div>    
        </div>
    );
}

export default NavBar