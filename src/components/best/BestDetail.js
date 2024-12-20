import React from 'react';
import { useParams } from 'react-router-dom';
import BestList from './bestList.Data';
import InfoBox from './InfoBox';
import BoonBox from './BoonBox';
import './Best.css';

const BestDetail = () => {
  const { id } = useParams(); // useParams를 사용하여 URL의 id를 가져옵니다.

  // id가 유효한지 확인하고, BestList에서 해당 id의 항목을 찾습니다.
  const item = BestList.find(item => item.id === +id);

  return (
    <div className='bestDetail-box'>
      <div className='w-[1180px] pt-[45px] mx-auto flex'>
          <img src={item.src} alt={item.title} style={{width: '540px', flexShrink: 0}} />
          <div className='all-info-wrap'>
            <InfoBox item={item} />
            {/* info-box 가격관련 */}
            <BoonBox/>
            {/* boon-box 혜택관련 */}

            <div>
              <div className=''>

              </div>
              <ul className=''>
                  <li>
                    <p></p>
                    <div className='calc-box'>
                      <button className='minus'></button>
                      <span>9999</span>
                      <button className='plus'></button>
                    </div>
                    <p>74,540원</p>
                    <button className='delete-btn'></button>
                  </li>  
              </ul>
            </div>
            {/* select-box 제품선택관련 */}

            <div className='total-box'>

            </div>
            {/* total-box 총합계 */}


            <div className=''>
                <button></button>
                <button></button>
                <button className=''>BUY</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BestDetail;