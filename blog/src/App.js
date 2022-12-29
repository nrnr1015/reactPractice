/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  // 서버에서 가져온다고 가정.
  let post = '강남 우동 맛집';

  // useState = b:state 변경을 도와주는 함수 
  // 자주 변경이 될 것 같은 data를 useState
  let [array , setArray] = useState(['하마 코트 추천', '여자 코트 추천', '아동 코트 추천'])
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function abcSort(){
    let arrayCopy = [...array].sort();
    setArray(arrayCopy)
  }
  
  return (
    <div className="App">
      <div className="block-nav">
        <h1 style={{color : 'red', fontSize: '16px'}}>logo</h1>
      </div>
      
      <button onClick={abcSort}>가나다 정렬</button>

      <button onClick={ () => {
        // [...] 괄호 벗기고, 다시 씌워줘 deep copy
        let copy = [...array];
        copy[0] = '따듯한 코트 추천'
        setArray(copy); // 새로운 state 생성
        }}>글수정</button>

      <div className="list">
        {
          array.map(function (item, i){
            return (
              <div>
                <h4 item={item} i={i} key={i}>
                  {item}
                  <span onClick={() => {
                    let likeCopy = [...like]
                    likeCopy[i] = likeCopy[i] + 1;
                    setLike(likeCopy)
                  }}>🍎 <span>{like[i]}</span></span>
                </h4>
                <p>날짜</p>
              </div>
            )
          })
        }
      </div>

      <button onClick={() => {
        setModal(!modal)
      }}>
        Modal open
      </button>

      {
        modal === true ? <Modal titleArray={array}/> : null
      }
      
    </div>
  );
}

// component는 언제 쓰는가?
// 1. 반복적일때 2. 큰 페이지를 쓸때 3. 지주 변경되는 UI
// state 가져다 쓸때 주의 할 것.
// const로 함수 만들면 실수 방지하기 좋음. const Modal = () => {}
// 부모 > 자식 state 전송 = pops 
// 1.  <Modal titleArray={array}/>  2. props 파라미터 추가 {props.titleArray}
const Modal = (props) => {  
  return(
    <div className="modal">
      <h4>{props.titleArray}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
