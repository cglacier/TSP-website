import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from "gsap";
import { MdKeyboardArrowUp } from 'react-icons/md';

const HamburgerNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const nav = useRef();
  const menuTween = useRef();
  const iconTween = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        nav.current &&
        !nav.current.contains(event.target)
      ) {
        HandleMenu();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);

  const HandleMenu = () => {
    if (navbarOpen) {
      menuTween.current.reverse();
      iconTween.current.reverse();
      setNavbarOpen(false);
    } else {
      menuTween.current.play();
      iconTween.current.play();
      setNavbarOpen(true);
    }
  } 

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      iconTween.current = gsap.from(".toggle", {rotation: -180, paused: true})

      menuTween.current = gsap.from(".menu", {y: -200, height: 0, opacity: 0, paused: true})

    }, nav);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={nav} className='hamburger'>
      <div className="menu">
        <NavLink to='/' className={(navData) => navData.isActive ? "currentpage" : "page"}>Home</NavLink>
        <NavLink to='/process' className={(navData) => navData.isActive ? "currentpage" : "page"}>Process</NavLink>
        <NavLink to='/product' className={(navData) => navData.isActive ? "currentpage" : "page"}>Product</NavLink>
      </div>
      <button className="toggle" onClick={ () => HandleMenu() }>
        <MdKeyboardArrowUp className="icon"/>
      </button>
    </div>
  );
};

export default HamburgerNav;