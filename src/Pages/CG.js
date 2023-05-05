import React from 'react';
import "../App.css";
import { SocialIcon } from 'react-social-icons';
import CG_headshot from '../Images/CG_headshot.PNG';

const CG = () => (
    <div className='personal'>
      <div className='mountainbackground'>
        <img className='avatar' src={CG_headshot} alt="CG_headshot" />
      </div>
      <div className='information'>
        <h2>Nice to meet you!</h2>
        <h2>Let's stay in touch</h2>
        <hr className='separator'/>
        <a href="mailto:CG@tspoon.app">CG@tspoon.app</a>
        <a href="tel:303-588-9485">(303) 588-9485</a>
        <hr className='separator'/>
        <div className='socials'>
          <SocialIcon bgColor="#efefef" url="https://www.linkedin.com/in/christian-glatz/"/>
          <SocialIcon bgColor="#efefef" url="https://twitter.com/c__glacier"/>
          <SocialIcon bgColor="#efefef" url="https://t.me/c_glacier"/>
        </div>
      </div>
    </div>
);

export default CG;