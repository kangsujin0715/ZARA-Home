import React from 'react';
import { useParams } from 'react-router-dom';
import BestList from './bestList.Data';

const BestDetail = () => {
  const { id } = useParams(); // useParams를 사용하여 URL의 id를 가져옵니다.

  // id가 유효한지 확인하고, BestList에서 해당 id의 항목을 찾습니다.
  const item = BestList.find(item => item.id === +id);

  return (
    <div className='mt-[76px]'>
      <div className='w-[1180px] pt-[45px] mx-auto flex'>
          <img src={item.src} alt={item.title} style={{width: '540px'}} />
          <div>
            <h2>BestDetail {id} {item.title}</h2>
            {item.new}
            {item.best}
            {item.price} 
          </div>
      </div>
    </div>
  );
};

export default BestDetail;