import React from "react";
import Navigation from "./Navigation";
import { NavLink } from 'react-router-dom';
import transparent_logo from "../Images/Teaspoon_Logo_Transparent.PNG"
import teaspoon_right from "../Images/teaspoon_right.PNG"
import HamburgerNav from "./HamburgerNav";
import "../App.css"

const Header = () => (
    <div className="header">
        <NavLink to='/'><img className="hlogo" src={transparent_logo} alt="transparent_logo" /></NavLink>
        <h1 className="htitle">Teaspoon Limited</h1>
        <Navigation />
        <HamburgerNav />
    </div>
)

export default Header;