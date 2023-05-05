import { useRef, useLayoutEffect, React } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NavLink } from 'react-router-dom';
import '../App.css';
import Sitemap from '../Components/Sitemap';
import as1 from "../Images/activist_shareholding1.png"
import as2 from "../Images/activist_shareholding2.png"
import as3 from "../Images/activist_shareholding3.png"
import as4 from "../Images/activist_shareholding4.png"
import as5 from "../Images/activist_shareholding5.png"
import as6 from "../Images/activist_shareholding6.png"
import as7 from "../Images/activist_shareholding7.png"
import as8 from "../Images/activist_shareholding8.png"
import as9 from "../Images/activist_shareholding9.png"
import as10 from "../Images/activist_shareholding10.png"
import as11 from "../Images/activist_shareholding11.png"
import as12 from "../Images/activist_shareholding12.png"
import as13 from "../Images/activist_shareholding13.png"
import transparent_logo from "../Images/Teaspoon_Logo_Transparent.PNG"
import ImageCarousel from '../Components/Carousel';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger); 
}

const Process = () => {
  
  return (
    <div className='process'>
      <div className='panel'>
        <div className='center'>
          <h2>How do Shareholder's access their voting rights?</h2>
          <p>
            Learn about this process from Bob's story:
          </p>
          <hr className='separator'></hr>
          <ImageCarousel images={[as1, as2, as3, as4, as5, as6, as7, as8, as9, as10, as11, as12, as13, transparent_logo]} text={[
            "This is Bob\nHe owns exactly one share of AAPL",
            "However, Bob uses a brokerage\nBob doesn't own his share\nHis brokerage does",
            "Bob does own something\nA claim to some of the brokerages AAPL\nA 'slice of the pie'",
            "Here's where things get strange\nThe broker doesn't hold shares either",
            "Most brokerages have a claim to DTC shares\nDTC is the Fed's depository\nThis makes trading those shares easier",
            "Now, Bob wants to vote on AAPL policy\nEvery shareholder has the right\nHow do we give Bob his voting rights?",
            "DTC sends voting rights to the brokerage\nThen, the broker asks Bob to vote\nUsually through a proxy solicitation firm",
            "However, the broker can vote for Bob\nThis ensures that a vote quorum is met\nBrokers usually don't inform shareholders",
            "Bob can ask the broker to inform him\nMost institutional investors do this\nAnd shareholders must be treated equally",
            "Now Bob knows when every vote occurs\nBut he only owns one share\nHow does he find other activist investors?",
            "Bob wants to change from NOBO to OBO\nOBO means Objectionary Beneficial Owner\nNow, activists can see Bob and reach out",
            "This has another benefit\nBrokers ask OBOs to vote on more things\nBob has proven he's an active shareholder",
            "Bob can vote on AAPL policy now\nBut only when a vote is called\nHow does Bob stay informed?",
            "Teaspoon is here to help"
            ]}/>
        </div>
      </div>
      <div className='textbox'>
        <p>
          We hope to make this process as simple as clicking a button.
          The first service we plan on providing will allow you, the stock owner, to change your status from NOBO (Non-Objectionary Beneficial Owner) to OBO (Objectionary Beneficial Owner) with the click of a button.
          This means the company has to notify you personally on all voting matters.
        </p>
        <hr className='separator'/>
        <div className='learnmore'>
          <p>
            Want to lean more about the services we plan on providing in the future?
          </p>
          <NavLink to='/product' className='nostyle'><button>learn more</button></NavLink>
        </div>
      </div>
      <Sitemap/>
    </div>
  );
};

export default Process;