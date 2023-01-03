import * as React from 'react';
import {useState} from 'react';

import { Routes , Route, Link } from 'react-router-dom'

const Datail = () => {
  return (
    <div className="datail">
        <div className="container">
          <div className="row-around">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 

    </div>
  );
}

export default Datail;
