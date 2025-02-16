import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Dropdown from './modules/Dropdown';
import BIGFRONTIMAGE from './modules/BIGFRONTIMAGE';
import Home from './pages/Main/Home';


const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home/> }/>
        <Route path="/home" element={ <Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
