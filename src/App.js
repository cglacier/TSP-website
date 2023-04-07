import React from 'react';
import './App.css';
import Main from './Pages/Main'
import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';

const App = () => (
  <div className='app'>
    <Header />
    <ScrollToTop />
    <Main />
  </div>
);

export default App;
