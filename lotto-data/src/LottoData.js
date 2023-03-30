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
          <ul>
            {
              lotto.numbers.map((item,index) => {
                // 9이하는 두자리 수를 만든다
                const formatNum = item < 10 ? `0${item}` : item;
                // item 10이하는 
                const format10 = item <= 10 ? 'text' : '';
                return <li 
                        key={index}  
                        data-num={formatNum}
                        className={`number${index} ${format10}`}
                        >
                          {formatNum}
                      </li>
              })
            }
            
          </ul>
          <p>{lotto.bonus_no}</p>
          {/* {console.log(lottoData[i])} */}
          {/* {console.log("lotto",lotto)} */}
          {/* 나머지 코드 */}
        </div>
      ))}
    </div>


  );
}

export default LottoData;
