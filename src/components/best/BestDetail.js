import React from 'react';
import { useParams } from 'react-router-dom';
import BestList from './bestList.Data';

const BestDetail = () => {
  const { id } = useParams(); // useParams를 사용하여 URL의 id를 가져옵니다.

  // id가 유효한지 확인하고, BestList에서 해당 id의 항목을 찾습니다.
  const item = BestList.find(item => item.id === +id);

  return (
    <div className='mt-3.5'>
      {/* item이 존재할 때만 title을 출력하고, 이미지도 표시하도록 합니다. */}
      <h1 style={{ marginTop: '300px', background: '#000', color: '#FFF' }}>
        BestDetail {id} {item.title}
      </h1>
        <img src={item.src} alt={item.title} />
        {item.new}
        {item.best}
        {item.price}
    </div>
  );
};

export default BestDetail;
