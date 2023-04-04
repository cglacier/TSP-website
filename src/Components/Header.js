import React from "react";
import Navigation from "./Navigation";
import { NavLink } from 'react-router-dom';
import transparent_logo from "../Images/Teaspoon_Logo_Transparent.PNG"
import HamburgerNav from "./HamburgerNav";
import "../App.css"

const Header = () => (
    <div className="header">
        <div className="small-title">
            <NavLink to='/'><img className="logo" src={transparent_logo} alt="transparent_logo" /></NavLink>
            <HamburgerNav />
        </div>
        <div className="medium-title">
            <NavLink to='/'><img className="logo" src={transparent_logo} alt="transparent_logo" /></NavLink>
            <h5>Teaspoon</h5>
            <HamburgerNav />
        </div>
        <div className="big-title">
            <NavLink to='/'><img className="logo" src={transparent_logo} alt="transparent_logo" /></NavLink>
            <h5>Teaspoon</h5>
            <Navigation />
        </div>
    </div>
)

export default Header;