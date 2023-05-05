import { useRef, useLayoutEffect, React } from 'react';
import '../App.css';
import { gsap } from "gsap";
import Form from "../Components/Form.js";
import { NavLink } from 'react-router-dom';
import transparent_logo from "../Images/Teaspoon_Logo_Transparent.PNG";
import Sitemap from '../Components/Sitemap';
import { BsBuildings } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { TbBuildingBank } from 'react-icons/tb';

const Home = () => {

  const home = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(".backgroundlogo", { rotation: -180, x: -200, duration: 2, opacity: 0 });

      gsap.from(".boxl", { rotation: 180, duration: 2, x: 200 });

      gsap.from(".boxr", { rotation: 180, duration: 2, x: -200 });

    }, home);
    
    return () => ctx.revert();
  }, []);

  return(
    <div ref={home} className='homepage'>
      <div className='panel light-blue'>
        <div className='center'>
          <div className='backgroundlogo'>
            <div className='userbox'>
              <h2 className='boxl'>If you own stock you can:</h2>
              <h6 className='boxr'> cast a vote </h6>
              <h6 className='boxl'> make a difference </h6>
              <h6 className='boxr'> change the world </h6>
              <NavLink to='/process' className='nostyle'><button className='boxl'> learn more </button></NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className='panel maroon'>
        <div className='center'>
          <BsBuildings className='groupicon white'/>
          <div className='box companyborder'>
            <h2>We help companies</h2>
            <p>
              We help companies gain better insight into what their shareholders think about upcoming decisions and new regulation. We make it easy for companies to establish good governance and maintain trust with shareholders.
            </p>
          </div>
        </div>
      </div>
      <div className='panel yellow'>
        <div className='center'>
          <div className='box brokerborder'>
            <h2 className='black'>Added utility to Brokerages</h2>
            <p className='black'>
              Brokerages are now selling a means to creating change in a company. We can help brokerages add more utility to their services.
            </p>
          </div>
          <FaHandshake className='groupicon black'/>
        </div>
      </div>
      <div className='panel green'>
        <div className='center'>
          <TbBuildingBank className='groupicon white'/>
          <div className='box regulatorborder'>
            <h2>We provide deeper insight</h2>
            <p>
              We help institutional eyes look deeper into the industry and help discern company and shareholder intent.
            </p>
          </div>
        </div>
      </div>
      <div className='panellong'>
        <div className='center'>
          <div className='box'>
            <img className="slogo" src={transparent_logo} alt="transparent_logo" />
            <hr className='separator'/>
            <p>
              Teaspoon is a financial services company building a platform where stock owners can access their voting rights. We were founded in 2022 and are based out of Boulder, CO.
            </p>
            <hr className='separator'/>
            <div className='learnmore'>
              <p>
                Curious to know what exactly we do?
              </p>
              <NavLink to='/product' className='nostyle'><button>learn more</button></NavLink>
            </div>
          </div>
          <div className='updatebox'>
            <h2>Stay Updated:</h2>
            <Form/>
          </div>
        </div>
      </div>
      <Sitemap/>
    </div>
  );
};

export default Home;