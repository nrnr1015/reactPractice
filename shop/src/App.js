import * as React from 'react';
import {useState} from 'react';

import './App.css';
import ShoseData from './data';

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
      
        <div className='main-bg'>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        </div>

        <div className="container">
          <div className="row">
            {itemList}
          </div>
        </div>
    </div>
  );
}



export default App;
