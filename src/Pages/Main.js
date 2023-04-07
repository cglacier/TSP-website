import { Routes, Route } from 'react-router-dom';
import Home from './Home'
import Product from './Product'
import Process from './Process'
import CG from './CG';
import DM from './DM';

const Main = () => (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/product' element={<Product />}></Route>
      <Route exact path='/process' element={<Process />}></Route>
      <Route exact path='/CG' element={<CG />}></Route>
      <Route exact path='/DM' element={<DM />}></Route>
    </Routes>
);

export default Main;