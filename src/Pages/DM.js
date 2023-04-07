import React from 'react';
import "../App.css";
import { SocialIcon } from 'react-social-icons';
import DM_headshot_border from '../Images/DM_headshot_border.PNG';

const DM = () => (
    <div className='dm'>
      <div className='vcontainer'>
        <img className='avatar' src={DM_headshot_border} alt="DM_headshot_border" />
        <h2>Hi, I'm Dillon </h2>
        <h2>I do cool things @ Teaspoon Limited.</h2>
        <h2>Let's connect!</h2>
        <a href="mailto:DM@tspoon.app">DM@tspoon.app</a>
        <a href="tel:303-304-0565">(303) 304-0565</a>
        <div className='socials'>
          <SocialIcon url="https://www.linkedin.com/in/dmathues/" />
          <SocialIcon url="https://twitter.com/DillonMathues" />
          <SocialIcon url="http://t.me/dmathues" />
        </div>
      </div>
    </div>
);

export default DM;