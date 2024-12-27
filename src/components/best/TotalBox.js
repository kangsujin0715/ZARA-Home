import React from 'react'
import styled from "styled-components";

const TotalBox = ({item}) => {
  return (
      <TotalWrap>
        <NumberBox>총 상품금액(3개)</NumberBox>
        <PriceBox>{item.sale ? item.newPrice : item.price}원</PriceBox>
      </TotalWrap>
    )
}


const TotalWrap = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 46px;
`;

const NumberBox = styled.p`
  font-size: 14px;
  color: #757575;
  line-height: 28px;
  margin-right: 16px;
`;

const PriceBox = styled.h2`
  font-size: 32px;
  color: #282828;
  font-weight: 700;
`;


export default TotalBox