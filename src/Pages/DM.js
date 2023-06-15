import React from 'react';
import "../App.css";
import { SocialIcon } from 'react-social-icons';
import DM_headshot from '../Images/DM_headshot.PNG';

const DM = () => (
    <div className='personal'>
      <div className='mountainbackground'>
        <img className='avatar' src={DM_headshot} alt="DM_headshot" />
      </div>
      <div className='information'>
        <h2>Hi, I'm Dillon </h2>
        <h2>I do cool things @ Teaspoon Limited.</h2>
        <h2>Let's connect!</h2>
        <hr className='separator white_bg'/>
        <a href="mailto:DM@tspoon.app">DM@tspoon.app</a>
        <a href="tel:303-304-0565">(303) 304-0565</a>
        <hr className='separator white_bg'/>
        <div className='socials'>
          <SocialIcon bgColor="#efefef" url="https://www.linkedin.com/in/dmathues/" />
          <SocialIcon bgColor="#efefef" url="https://twitter.com/DillonMathues" />
          <SocialIcon bgColor="#efefef" url="http://t.me/dmathues" />
        </div>
      </div>
    </div>
);

export default DM;