import { useRef, useLayoutEffect, React } from 'react';
import '../App.css';
import Form from "../Components/Form.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowDown } from "react-icons/fi"
import { MdHowToVote } from "react-icons/md"
import { GiTeamIdea } from "react-icons/gi"
import { HiInformationCircle } from "react-icons/hi"
import { TbCubeSend } from "react-icons/tb"
import Sitemap from '../Components/Sitemap';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger); 
}

const Product = () => {

  const product = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(".backgroundlogo", { rotation: -180, x: -200, duration: 2, opacity: 0 });

      gsap.from(".boxl", { rotation: 180, duration: 2, x: 200 });

      gsap.from(".boxr", { rotation: 180, duration: 2, x: -200 });

      gsap.from(".step1", { x: -200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".step1",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".stepbox1", { x: 200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".stepbox1",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".step2", { x: 200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".step2",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".stepbox2", { x: -200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".stepbox2",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".step3", { x: -200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".step3",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".stepbox3", { x: 200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".stepbox3",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".step4", { x: 200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".step4",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".stepbox4", { x: -200, duration: 2, opacity: 0, scrollTrigger: {
        trigger: ".stepbox4",
        toggleActions: "restart pause resume reset",
        start: "10px 80%",
        end: "top 40%",
        scrub: 1,
      } });

      gsap.from(".boxu", { duration: 2, y: -400, opacity: -1, scrollTrigger: {
        trigger: ".step4",
        start: "bottom 90%",
        toggleActions: "restart pause resume reset",
      } });

    }, product);
    
    return () => ctx.revert();
  }, []);

  return(
    <div ref={product} className='product'>
      <div className='cbox'>
        <div className='backgroundlogo'>
          <div className='cboxbg boxl'>
            <pb>
              Solving the problem of proxy voting must be done one step at a time.
              Our product roadmap outlines the milestones we plan on reaching as our solution evolves.
            </pb>
          </div>
          <div className='cboxbg boxr'>
            <pb>
              <FiArrowDown/>product roadmap<FiArrowDown/>
            </pb>
          </div>
        </div>
      </div>
      <div className='hcontainer'>
        <HiInformationCircle className='step step1'/>
        <div className='stepbox stepbox1'>
          <quote>Content Creation</quote>
          <pb>We provide a platform where individuals can learn how about their voting rights and where they can find information relevant to their positions.</pb>
          <pb>Check back regularly as we integrate this information into the website</pb>
        </div>
      </div>
      <div className='hcontainer'>
        <div className='stepbox stepbox2'>
          <quote>Active Ownership</quote>
          <pb>We provide the information and tools necessary for shareholders to access their voting rights</pb>
          <pb>We plan to make this legally complex process as easy as entering some basic information and clicking a button</pb>
        </div>
        <MdHowToVote className='step step2'/>
      </div>
      <div className='hcontainer'>
        <GiTeamIdea className='step step3'/>
        <div className='stepbox stepbox3'>
          <quote>Idea Nexus</quote>
          <pb>We expand functionality of our platform to connect activist shareholders and allow ideas to be shared before they are submitted through the proxy voting process.</pb>
          <pb>At this point, we plan on including decentralized technologies to diminish the central role of Teaspoon in managing this information.</pb>
        </div>
      </div>
      <div className='hcontainer'>
        <div className='stepbox stepbox4'>
          <quote>Proxy Solicitation</quote>
          <pb>We finally tackle the most legally complex part of this process: proxy solicitation.</pb>
          <pb>We expand functionality of our platform to allow shareholders to not only access their voting rights, but also submit shareholder sentiment to the company and other shareholders.</pb>
        </div>
        <TbCubeSend className='step step4'/>
      </div>
      <div className='cbox boxu'>
        <pb>Update me with product releases:</pb>
        <Form/>
      </div>
      <Sitemap/>
    </div>
  );
};

export default Product;