import { useRef, useLayoutEffect, React } from 'react';
import '../App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "../Components/Form.js";
import { NavLink } from 'react-router-dom';
import Sitemap from '../Components/Sitemap';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger); 
}

const Home = () => {

  const home = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(".backgroundlogo", { rotation: -180, x: -200, duration: 2, opacity: 0 });

      gsap.from(".boxl", { rotation: 180, duration: 2, x: 200 });

      gsap.from(".boxr", { rotation: 180, duration: 2, x: -200 });

      gsap.from(".boxlg1", { duration: 2, x: 400, opacity: 0, scrollTrigger: {
        trigger: ".boxlg1",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
      } });

      gsap.from(".boxlg2", { duration: 2, x: 400, opacity: 0, scrollTrigger: {
        trigger: ".boxlg2",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
      } });

      gsap.from(".boxrg1", { duration: 2, x: -400, opacity: -1, scrollTrigger: {
        trigger: ".boxrg1",
        toggleActions: "restart pause resume reset",
        start: "10px 90%",
      } });

      gsap.from(".boxrg2", { duration: 2, x: -400, opacity: -1, scrollTrigger: {
        trigger: ".boxrg2",
        toggleActions: "restart pause resume reset",
        start: "10px 90%",
      } });

      gsap.from(".boxu", { duration: 2, y: -400, opacity: -1, scrollTrigger: {
        trigger: ".boxrg2",
        start: "bottom 90%",
        toggleActions: "restart pause resume reset",
      } });

    }, home);
    
    return () => ctx.revert();
  }, []);

  return(
    <div ref={home} className='homepage'>
      <div className='cbox'>
        <div className='backgroundlogo'>
          <div className='cboxbg boxr'>
            <quote>Every Shareholder</quote>
          </div>
          <div className='cboxbg boxl'>
            <pb>can cast a vote</pb>
          </div>
          <div className='cboxbg boxr'>
            <pb>can make a difference</pb>
          </div>
          <div className='cboxbg boxl'>
            <pb>can change the world</pb>
          </div>
        </div>
      </div>
      <div className='cbox'>
        <div className='cboxbg boxlg1'>
          <quote>The Problem</quote>
        </div>
        <div className='cboxbg boxrg1'>
          <pb>Shareholders can't effectively access their voting rights tied to their stocks.</pb>
          <NavLink to='/process' className='link'>Learn more</NavLink>
        </div>
        <div className='cboxbg boxlg2'>
          <quote>The Product</quote>
        </div>
        <div className='cboxbg boxrg2'>
          <pb>A platform where shareholders can connect, contribute, and fully engage with the shareholder voting process.</pb>
          <NavLink to='/product' className='link'>Learn more</NavLink>
        </div>
      </div>
      <div className='cbox boxu'>
        <pb>Update me with product releases:</pb>
        <Form/>
      </div>
      <Sitemap/>
    </div>
  );
};

export default Home;