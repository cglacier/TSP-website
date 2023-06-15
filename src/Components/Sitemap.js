import React from "react";
import transparent_logo from "../Images/Teaspoon_Logo_Transparent.PNG"
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';

const Sitemap = () => (
    <div className="footer">
        <div className="socialbanner">
            <hr className="socialbar dark-blue_bg"/>
            <SocialIcon bgColor="#000927" style={{ height: "4vh", width: "4vh" }} url="https://www.linkedin.com/company/teaspoonfinance/"/>
            <SocialIcon bgColor="#000927" style={{ height: "4vh", width: "4vh" }} url="https://twitter.com/teaspoonfinance"/>
            <SocialIcon bgColor="#000927" style={{ height: "4vh", width: "4vh" }} url="https://www.youtube.com/@TeaspoonFinance"/>
            <SocialIcon bgColor="#000927" style={{ height: "4vh", width: "4vh" }} url="https://instagram.com/teaspoonfinance"/>
            <hr className="socialbar dark-blue_bg"/>
        </div>
        <div className="body">
            <div className="section">
                <img className="slogo" src={transparent_logo} alt="transparent_logo" />
                <h4 className="footerlabel dark-blue">Making{'\n'}Activist Investing{'\n'}Easy</h4>
            </div>
            <div className="section">
                <h4 className="footerlabel dark-blue">Pages</h4>
                <div className="links">
                    <NavLink to="/" className="link dark-blue">Home</NavLink>
                    <NavLink to="/process" className="link dark-blue">Process</NavLink>
                    <NavLink to="/product" className="link dark-blue">Product</NavLink>
                </div>
            </div>
        </div>
    </div>
)

export default Sitemap;