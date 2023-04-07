import { useRef, useLayoutEffect, React } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowDown } from "react-icons/fi"
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger); 
}

const Process = () => {
  const process = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(".backgroundlogo", { rotation: -180, x: -200, duration: 2, opacity: 0 });

      gsap.from(".boxl", { rotation: 180, duration: 2, x: 200 });

      gsap.from(".boxr", { rotation: 180, duration: 2, x: -200 });

      

      gsap.to(".hcontainer3", {
        xPercent: -92.5,
        ease: "none",
        scrollTrigger: {
          trigger: ".hcontainer3",
          pin: true,
          scrub: 1,
          start: "center center",
          end: "+=6600px"
        }
      });

    }, process);
    
    return () => ctx.revert();

  }, []);
  
  return (
    <div ref={process} className='process'>
      <div className='cbox'>
        <div className='backgroundlogo'>
          <div className='cboxbg boxl'>
            <pb>
              The current process for activist shreholding is messy. Learn from the perspective of Bob just how messy it can be.
            </pb>
          </div>
          <div className='cboxbg boxr'>
            <pb>
              <FiArrowDown/>Bob's story<FiArrowDown/>
            </pb>
          </div>
        </div>
      </div>
      <div className='hcontainer3'>
        
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>This is Bob</pb>
            <pb>He owns $155.12 of AAPL</pb>
            <pb>Exactly one share</pb>
          </div>
          <img className='as' src={as1} alt="as1" />
        </div>

        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>However, Bob uses a brokerage</pb>
            <pb>Bob doesn't own his share</pb>  
            <pb>His brokerage does</pb>
          </div>
          <img className='as' src={as2} alt="as2" />
        </div>
        
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Bob does own something</pb>
            <pb>A claim to some of the brokerages AAPL</pb>  
            <pb>A 'slice of the pie'</pb>
          </div>
          <img className='as' src={as3} alt="as3" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Here's where things get strange</pb>
            <pb>The broker doesn't hold shares either</pb>  
          </div>
          <img className='as' src={as4} alt="as4" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Most brokerages have a claim to DTC shares</pb>
            <pb>DTC is the Fed's depository</pb>  
            <pb>This makes trading those shares easier</pb>  
          </div>
          <img className='as' src={as5} alt="as5" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Now, Bob wants to vote on AAPL policy</pb>
            <pb>Every shareholder has the right</pb>  
            <pb>How do we give Bob his voting rights?</pb>
          </div>
          <img className='as' src={as6} alt="as6" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>DTC sends voting rights to the brokerage</pb>
            <pb>Then, the broker asks Bob to vote</pb>  
            <pb>Usually through a proxy solicitation firm</pb>
          </div>
          <img className='as' src={as7} alt="as7" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>However, the broker can vote for Bob</pb>
            <pb>This ensures that a vote quorum is met</pb>  
            <pb>Brokers usually don't inform shareholders</pb>
          </div>
          <img className='as' src={as8} alt="as8" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Bob can ask the broker to inform him</pb>
            <pb>Most institutional investors do this</pb>  
            <pb>And shareholders must be treated equally</pb>
          </div>
          <img className='as' src={as9} alt="as9" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Now Bob knows when every vote occurs</pb>
            <pb>But he only owns one share</pb>  
            <pb>How does he find other activist investors?</pb>
          </div>
          <img className='as' src={as10} alt="as10" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Bob wants to change from NOBO to OBO</pb>
            <pb>OBO means Objectionary Beneficial Owner</pb>  
            <pb>Now, activists can see Bob and reach out</pb>
          </div>
          <img className='as' src={as11} alt="as11" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>This has another benefit</pb>
            <pb>Brokers ask OBOs to vote on more things</pb>
            <pb>Bob has proven he's an active shareholder</pb>
          </div>
          <img className='as' src={as12} alt="as12" />
        </div>
        <div className='vcontainer2'>
          <div className='astitle'>
            <pb>Bob can vote on AAPL policy now</pb>
            <pb>But only when a vote is called</pb>
            <pb>How does Bob stay informed?</pb>
          </div>
          <img className='as' src={as13} alt="as13" />
        </div>

        <div className='lastcontainer'>
          <div className='astitle'>
            <pb>That's the problem Teaspoon wants to solve</pb>
          </div>
          <img className='logo' src={transparent_logo} alt="transparent_logo" />
        </div>
      </div>
      <div className='space1'/>
      <Sitemap/>
    </div>
  );
};

export default Process;