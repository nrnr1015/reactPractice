import * as React from 'react';
import {useState} from 'react';

import { Routes , Route, Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className="datail">
        <div className="container">
          <p>íėŽėę°</p>
          <Outlet></Outlet>
        </div> 

    </div>
  );
}

export default About;
