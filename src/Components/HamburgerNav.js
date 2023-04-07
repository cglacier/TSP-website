import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';

const HamburgerNav = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const handler = (event) => {
        if (
          navbarOpen &&
          ref.current &&
          !ref.current.contains(event.target)
        ) {
          setNavbarOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }, [navbarOpen]);

    return (
      <nav ref={ref} className="hamburger">
        <ul className={navbarOpen ? "show-menu" : "hide-menu"}>
          <li><NavLink to='/' className={(navData) => navData.isActive ? "current" : "a"}>Home</NavLink></li>
          <li><NavLink to='/process' className={(navData) => navData.isActive ? "current" : "a"}>Process</NavLink></li>
          <li><NavLink to='/product' className={(navData) => navData.isActive ? "current" : "a"}>Product</NavLink></li>
        </ul>
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
          {navbarOpen ? <FaTimes className='icon'/> : <HiMenu className='icon'/>}
        </button>
      </nav>
    );
};

export default HamburgerNav;