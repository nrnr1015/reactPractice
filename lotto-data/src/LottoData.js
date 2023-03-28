// import React, { useState, useEffect } from 'react';
// import axios from "axios";


// function LottoData() {

//   const [lottoData, setLottoData] = useState([]);
//   useEffect(() => {
//     async function getLottoData() {
//       const data = [];
//       const API_URL = '/common.do?method=getLottoNumber&drwNo=';

//       const delayTime = 500; 

//       for (let i = 1; i <= 999; i++) { // 1회 ~ 999회
//         await delay(delayTime); // 요청 간격을 위한 delay

//         try {
//           const response = await axios.get(API_URL + `${i}`);
//           console.log('response: ', response.data);
//           data.push(response.data);
//         } catch (error) {
//           console.error(`Error while fetching data for round ${i}: ${error}`);
//         }
//       }

//       let i = 1000; // 1000회부터의 데이터는 while 문을 사용하여 처리
//       while (true) {
//         await delay(delayTime); // 요청 간격을 위한 delay

//         try {
//           const response = await axios.get(`https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${i}`);
//           const dataItem = response.data;

//           if (dataItem.returnValue === "fail") {
//             break; // 데이터가 더 이상 없으면 while 루프 종료
//           }

//           data.push(dataItem);
//           i++;
//         } catch (error) {
//           console.error(`Error while fetching data for round ${i}: ${error}`);
//           i++; // 에러가 발생하더라도 while 루프는 계속 진행
//         }
//       }
      
//       setLottoData(data);
//     }
//     getLottoData();
//   }, []);
//   function delay(ms) { // 지정한 시간(ms) 만큼 delay 하는 함수
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
//   console.log("lottoData", lottoData.length);

//   return (
//     <div>
//       <table>
//           <thead>
//             <tr>
//               <th>회차</th>
//               <th>당첨번호</th>
//               <th>보너스번호</th>
//               <th>1등 당첨금</th>
//               <th>1등 당첨자 수</th>
//             </tr>
//           </thead>
//           <tbody>
//             {lottoData.map(item => (
//               <tr key={item}>
//                 <td>{item.drwNo}회</td>
//                 <td>
//                   {item.drwtNo1} {item.drwtNo2} {item.drwtNo3} {item.drwtNo4} {item.drwtNo5} {item.drwtNo6}
//                 </td>
//                 <td>{item.bnusNo}</td>
//                 <td>{item.firstWinamnt.toLocaleString()}</td>
//                 <td>{item.firstPrzwnerCo.toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//     </div>
//   );
// }

import axios from 'axios';
import { useState, useEffect } from 'react';

function LottoData() {
  const [lottoData, setLottoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const API_URL = '/lotto/results/all.json';
      const response = await axios.get(API_URL);
      const responseData = response.data;
      const responseDataLength = responseData.length;
      const finalData = responseData.slice(0, responseDataLength);
      setLottoData(finalData.sort((a,b) => b.draw_no - a.draw_no));
    }

    fetchData();
  }, []);

  return (
    <div className='lottoDate'>
      {lottoData.map((lotto, i) => (
        <div key={i}>
          <h2>{lotto.draw_no}</h2>
          <p>{lotto.numbers}</p>
          <p>{lotto.bonus_no}</p>
          {/* {console.log(lottoData[i])} */}
          {console.log("lotto",lotto)}
          {/* 나머지 코드 */}
        </div>
      ))}
    </div>


  );
}

export default LottoData;
