import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className='bar'>
    <li><NavLink to='/' className={(navData) => navData.isActive ? "current" : "a"}>Home</NavLink></li>
    <li><NavLink to='/process' className={(navData) => navData.isActive ? "current" : "a"}>Process</NavLink></li>
    <li><NavLink to='/product' className={(navData) => navData.isActive ? "current" : "a"}>Product</NavLink></li>
  </nav>
);

export default Navigation;