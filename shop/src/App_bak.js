import * as React from 'react';
import {useState} from 'react';

import './App.css';
//import ShoseData from './data';
import ItemListCard from './Main';

import { Routes , Route, Link } from 'react-router-dom'
function App(props) {

  let [shoes, setShoes] = useState(ShoseData);

  const itemList = () => {
    shoes.map( (item, i) => {
      return(
        <div className={`col-md-4 item-elem item_${i}`} id={`item-${i}`} key={i}>
          <img src={item.img} width="80%" alt={item.title}/>
          <h4>{props.shoes[item.title]}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
        </div>
      )
    })
  }

  return (
    <div className="App">
        <Link to="/">홈</Link>
        <Link to="/datail">상세</Link>

        <Routes>
          <Route path='/' element={<div>main</div>}/> 
          <Route path='/datail' element={<div>상세</div>}/> 
          
        </Routes>
        <div className='main-bg'>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        </div>

        <div className="container">
          <div className="row">
            {/* {itemList} */}
            <ItemListCard shoes={shoes}></ItemListCard>
          </div>
        </div>
    </div>
  );
}

//{itemList} 컴포넌트로 만들기 && props 전송
const ItemListCard = (props) => {
  return(
    props.shoes.map( (item, i) => {
      return(
        <div className={`col-md-4 item-elem item_${i}`} id={`item-${i}`} key={i}>
          <img src={item.img} width="80%" alt={item.title}/>
          <h4>{props.shoes[item.title]}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
        </div>
      )
    })
  )
}


export default App;
