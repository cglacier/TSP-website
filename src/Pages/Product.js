import { useRef, useLayoutEffect, React } from 'react';
import '../App.css';
import Form from "../Components/Form.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

    }, product);
    
    return () => ctx.revert();
  }, []);

  return(
    <div ref={product} className='product'>
      <div className='center'>
        <h2>What does Teaspoon do?</h2>
        <hr className='separator'/>
        <ul>
          <li><h6>Provide an informational hub desgined to keep activist investors informed</h6></li>
          <li><h6>Build tools for shareholders so that activist investing is accessible to everyone</h6></li>
          <li><h6>Connect activist investors with like-minded shareholders and the companies where they hold shares</h6></li>
          <li><h6>Manage legal compliance for activist investors</h6></li>
        </ul>
      </div>
      <div className='stepcontainer'>
        <HiInformationCircle className='step step1'/>
        <div className='stepbox stepbox1'>
          <h2>Content Creation</h2>
          <p>We provide a platform where individuals can learn how about their voting rights and where they can find information relevant to their positions.</p>
          <p>Check back regularly as we integrate this information into the website</p>
        </div>
      </div>
      <div className='stepcontainer'>
        <div className='stepbox stepbox2'>
          <h2>Active Ownership</h2>
          <p>We provide the information and tools necessary for shareholders to access their voting rights</p>
          <p>We plan to make this legally complex process as easy as entering some basic information and clicking a button</p>
        </div>
        <MdHowToVote className='step step2'/>
      </div>
      <div className='stepcontainer'>
        <GiTeamIdea className='step step3'/>
        <div className='stepbox stepbox3'>
          <h2>Idea Nexus</h2>
          <p>We expand functionality of our platform to connect activist shareholders and allow ideas to be shared before they are submitted through the proxy voting process.</p>
          <p>At this point, we plan on including decentralized technologies to diminish the central role of Teaspoon in managing this information.</p>
        </div>
      </div>
      <div className='stepcontainer'>
        <div className='stepbox stepbox4'>
          <h2>Proxy Solicitation</h2>
          <p>We finally tackle the most legally complex part of this process: proxy solicitation.</p>
          <p>We expand functionality of our platform to allow shareholders to not only access their voting rights, but also submit shareholder sentiment to the company and other shareholders.</p>
        </div>
        <TbCubeSend className='step step4'/>
      </div>
      <div className='formbox'>
        <p>Update me with product releases:</p>
        <Form/>
      </div>
      <Sitemap/>
    </div>
  );
};

export default Product;