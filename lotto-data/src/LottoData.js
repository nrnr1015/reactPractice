import React, { useState, useEffect } from 'react';
import axios from "axios";


function LottoData() {
  const [lottoData, setLottoData] = useState([]);
  const BASEURL = 'https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=+1'
  useEffect(() => {
    async function getLottoData() {
      const data = [];
      try {
        const response = await axios.get('/users',{
          //항목에 새롭게 넣을 데이터
          username: "stone",
          password: "123"
        });
        console.log('response: ', response);
        data.push(response.data);
      } catch (error) {
        console.error(`Error while fetching data for round `);
      }

      
      setLottoData(data);
    }

    getLottoData();
  }, []);



  return (
    <div>
      {lottoData.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>회차</th>
              <th>당첨번호</th>
              <th>보너스번호</th>
              <th>1등 당첨금</th>
              <th>1등 당첨자 수</th>
            </tr>
          </thead>
          <tbody>
            {lottoData.map(item => (
              <tr key={item.name}>
               
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LottoData;
