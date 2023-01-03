import * as React from 'react';
import {useState} from 'react';

import './App.css';
import Main from './routes/Main';
import Nav from './components/Nav';
import Datail from './routes/Datail';


import { Routes , Route, Link } from 'react-router-dom'
function App(props) {
  return (
    <div className="App">
        <Nav />
        
        <Routes>
          <Route path='/' element={<Main />}/> 
          <Route path='/datail' element={<Datail />}/> 
        </Routes>
        
    </div>
  );
}


export default App;
