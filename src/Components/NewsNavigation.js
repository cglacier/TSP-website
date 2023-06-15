import { NavLink } from 'react-router-dom';

const NewsNavigation = () => (
  <div className='newsnavbar'>
    <li><NavLink to='' end className={(navData) => navData.isActive ? "currentpage" : "page"}>General</NavLink></li>
    <li><NavLink to='TeaspoonNews' className={(navData) => navData.isActive ? "currentpage" : "page"}>Teaspoon</NavLink></li>
    <li><NavLink to='SECNews' className={(navData) => navData.isActive ? "currentpage" : "page"}>SEC Filings</NavLink></li>
  </div>
);

export default NewsNavigation;