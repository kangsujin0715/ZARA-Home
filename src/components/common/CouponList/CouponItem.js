import React from 'react';
import styled from "styled-components";

const CouponItem = ({ coupons }) => {
  return (
    <CouponItemWrap>
        {coupons.length > 0 ? (
          coupons.map((coupon, index) => (
            <CouponWrap key={index}>
              <CouponSale>{coupon.sale}</CouponSale>
              <CouponInfoWrap>
                <CouponInfo>
                  <h4>{coupon.title}</h4>
                  <p>{coupon.text}</p>
                </CouponInfo>
                <div>{coupon.downLoad}</div>
              </CouponInfoWrap>
            </CouponWrap>
          ))
        ) : (
          <div className="text-center pt-5">
            <p className="text-[14px] text-[#757575]">할인 가능한 쿠폰이 없습니다.</p>
          </div>
        )}
        {coupons.length > 0 ? (
            <CouponAllBtn>쿠폰 모두 받기</CouponAllBtn>
          ) : (
            <CouponAllBtn disabled>쿠폰 모두 받기</CouponAllBtn>
        )}
    </CouponItemWrap>
  );
};

const CouponItemWrap = styled.div`
  & > div {
    margin-top: 10px;
  }

  & > div:first-child {
    margin-top: 0;
  }
`;

const CouponWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #E0E0E0;
  padding: 10px 16px;
`;

const CouponSale = styled.h2`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  color: #CF0A2C;
  padding-right: 16px;
  width: 70px;
  flex-shrink: 0;
`;

const CouponInfoWrap = styled.div`
  display: flex;
  align-items: center;
  width:100%;
`;

const CouponInfo = styled.div`
  margin-right: auto;

  & h4 {
    color: #282828;
    font-weight: 700;
  }
  & p {
    color: #757575;
    font-size: 12px;
    text-align: left;
  }
`;

const CouponAllBtn = styled.button`
  margin-top: 46px;
  padding: 10px 18px;
  background-color: #111;
  color: #FFF;

  &:disabled {
    background-color: #C1C1C1;
  }
`;

export default CouponItem;
