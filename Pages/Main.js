import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Product from './Product'
import Process from './Process'
import CG from './CG';
import DM from './DM';
import News from '../News/News';
import General from '../News/General';
import TeaspoonNews from '../News/TeaspoonNews';
import SECNews from '../News/SECNews';

const Main = () => (
    <Routes>
      <Route path='' element={<Home />}></Route>
      <Route path='product' element={<Product />}></Route>
      <Route path='process' element={<Process />}></Route>
      <Route path='CG' element={<CG />}></Route>
      <Route path='DM' element={<DM />}></Route>
      <Route path='news' element={<News />}>
        <Route path='' element={<General />}></Route>
        <Route path='TeaspoonNews' element={<TeaspoonNews />}></Route>
        <Route path='SECNews' element={<SECNews />}></Route>
      </Route>
    </Routes>
);

export default Main;