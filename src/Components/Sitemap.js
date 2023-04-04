import React from "react";
import transparent_logo from "../Images/Teaspoon_Logo_Transparent.PNG"
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';

const Sitemap = () => (
    <div className="footer">
        <div className="footertitle">
            <img className="icon" src={transparent_logo} alt="transparent_logo" />
            <h3>Teaspoon</h3>
        </div>
        <hr/>
        <div className="hcontainer2">
            <div className="cbox2">
                <h4>Pages</h4>
                <div className="cbox3">
                    <NavLink to="/" className="link2">Home</NavLink>
                    <NavLink to="/process" className="link2">Process</NavLink>
                    <NavLink to="/product" className="link2">Product</NavLink>
                </div>
            </div>
            <div className="cbox2">
                <h4>Connect with us</h4>
                <div className="socials">
                    <SocialIcon url="https://www.linkedin.com/company/teaspoonfinance/"/>
                    <SocialIcon url="https://twitter.com/teaspoonfinance"/>
                    <SocialIcon url="https://www.youtube.com/@TeaspoonFinance"/>
                </div>
            </div>
        </div>
    </div>
)

export default Sitemap;