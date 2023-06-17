import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className='navbar'>
    <li><NavLink to='/' className={(navData) => navData.isActive ? "currentpage" : "page"}>Home</NavLink></li>
    <li><NavLink to='/process' className={(navData) => navData.isActive ? "currentpage" : "page"}>Process</NavLink></li>
    <li><NavLink to='/product' className={(navData) => navData.isActive ? "currentpage" : "page"}>Product</NavLink></li>
  </div>
);

export default Navigation;