import * as React from 'react';
import {useState} from 'react';

import ShoseData from '../data/data';

const Main = () => {

  let [shoes, setShoes] = useState(ShoseData);

  return (
    <div className="App">
        <div className='main-bg'>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        </div>

        <div className="container">
          <div className="row">
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


export default Main;
