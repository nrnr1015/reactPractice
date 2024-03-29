/*eslint-disable*/

import * as React from 'react';
import {useState} from 'react';

import './App.css';
import Main from './routes/Main';
import Nav from './components/Nav';
import About from './routes/About';
import Datail from './routes/Datail';


import { Routes , Route, Link , useNavigate, Outlet} from 'react-router-dom'
function App(e,i) {

  return (
    <div className="App">
        <Nav />
        
        <Routes>
          <Route path='/' element={<Main />}/> 
          <Route path='/about' element={<About />}>
            <Route path='company' element={<div>company</div>}/> 
            <Route path='location' element={<div>location</div>}/> 
          </Route>
          
          <Route path='/datail' element={<Datail />}/> 
          <Route path='*' element={<div>404페이지</div>}/> 
        </Routes>
        
    </div>
  );
}


export default App;
