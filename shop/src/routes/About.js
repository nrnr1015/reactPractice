import * as React from 'react';
import {useState} from 'react';

import { Routes , Route, Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div className="datail">
        <div className="container">
          <p>회사소개</p>
          <Outlet></Outlet>
        </div> 

    </div>
  );
}

export default About;
