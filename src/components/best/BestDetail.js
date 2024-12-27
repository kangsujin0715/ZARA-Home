import React from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import BestList from './bestList.Data';
import PriceBox from './PriceBox';
import BoonBox from './BoonBox';
import SelectBox from './SelectBox';
import TotalBox from './TotalBox';
import IconButton from '../common/Icon/IconButton';
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
            <PriceBox item={item} className="price-info" />
            {/* price-box 가격관련 */}
            <BoonBox/>
            {/* boon-box 혜택관련 */}
            <SelectBox item={item}/>
            {/* select-box 관련 */}
            <TotalBox item={item}/>
            {/* total-box 총합계 */}

            <BtnBox>
                <IconButton icon="favorite" bgColor="#FFF" />
                <IconButton icon="basket" bgColor="#FFF" />
                <BuyButton>BUY NOW</BuyButton>
            </BtnBox>
            <ProductNum>제품번호 {item.num}</ProductNum>
          </div>
      </div>
    </div>
  );
};

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 34px;

  & button {
    width: 48px;
    height: 48px;
  }
`;

const BuyButton = styled.button`
  background: #111 !important;
  color: #FFF;
  flex-grow: 1;
  height: 48px;
`;

const ProductNum = styled.p`
  font-size: 12px;
  color: #757575;
  margin-top: 10px;
`;

export default BestDetail;