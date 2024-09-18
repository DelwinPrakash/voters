import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
            </Routes>
            <NavBar/>
        </Router>
    );
}

export default App