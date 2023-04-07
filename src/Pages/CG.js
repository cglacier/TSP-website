import React from 'react';
import "../App.css"
import { SocialIcon } from 'react-social-icons';
import CG_headshot_border from '../Images/CG_headshot_border.PNG'

const CG = () => (
    <div className='cg'>
      <div className='vcontainer'>
        <img className='avatar' src={CG_headshot_border} alt="CG_headshot_border" />
        <h2>Nice to meet you!</h2>
        <h2>Let's stay in touch</h2>
        <a href="mailto:CG@tspoon.app">CG@tspoon.app</a>
        <a href="tel:303-588-9485">(303) 588-9485</a>
        <div className='socials'>
          <SocialIcon url="https://www.linkedin.com/in/christian-glatz/"/>
          <SocialIcon url="https://twitter.com/c__glacier"/>
          <SocialIcon url="https://t.me/c_glacier"/>
        </div>
      </div>
    </div>
);

export default CG;