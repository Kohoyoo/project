import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Main/Home';
import Sign from './pages/Login/Sign';

const HomePage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home/> }/>

        <Route path="/home" element={ <Home />}/>

        <Route path="/sign" element={ <Sign />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;
