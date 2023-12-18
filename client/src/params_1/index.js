import React from "react";
import {Route, Routes, Link} from 'react-router-dom';
import About from './component/about';
import Profile from './component/profile';
import Home from "./component/home";

function Params_1() {
    return (
    <>
        <ul>
            <li>
                <Link to="/">홈</Link>
            </li>
            <li>
                <Link to='/about'>소개</Link>
            </li>
        </ul>
        <hr/>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/profile/:username" element={<Profile/>}/>
        </Routes>
    </>
    );
}

export default Params_1;