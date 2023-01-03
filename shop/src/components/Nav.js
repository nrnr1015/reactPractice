import * as React from 'react';
import {useState} from 'react';

import { Routes , Route, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="Nav">
        <h1><Link className='link' to="/">Logo</Link></h1>

        <ul className='row'>
          <li><Link className='link' to="/">홈</Link></li>
          <li><Link className='link' to="/datail">상세</Link></li>
        </ul>
    </div>
  );
}

export default Nav;
