import * as React from 'react';
import {useState} from 'react';

import { Routes , Route, Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  let navigete = useNavigate();

  return (
    <div className="Nav">
        <h1><Link className='link' to="/">Logo</Link></h1>

        <ul className='row'>
          {/* onClick={ () => {navigete(-1)}}  뒤로가기 */}
          {/* onClick={ () => {navigete(1)}}  앞으로 */}

          <li onClick={ () => {navigete('/')}}>홈</li>
          <li onClick={ () => {navigete('/datail')}}>상세</li>
          <li onClick={ () => {navigete('/about')}}>about</li>

          {/* <li><Link className='link' to="/">홈</Link></li>
          <li><Link className='link' to="/datail">상세</Link></li> */}
        </ul>
    </div>
  );
}

export default Nav;
