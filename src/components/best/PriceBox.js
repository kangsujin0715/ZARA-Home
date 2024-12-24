import React, { useState } from 'react';
import PopupModal from '../common/popup/popup';
import CouponList from '../common/CouponList/couponList.Data';

const PriceBox = ({ item, share = true, coupon = true, className }) => {
  const [openModal, setOpenModal] = useState(false); // 쿠폰 모달 상태
  const [selectedCoupons, setSelectedCoupons] = useState([]); // 선택된 쿠폰 목록

  const handleClick = () => {
    // 쿠폰 데이터를 검색
    const couponData = CouponList.find(coupon => coupon.detail.some(detail => detail.id === item.id));
    setSelectedCoupons(couponData?.detail.find(detail => detail.id === item.id)?.coupons || []); // 쿠폰 데이터를 설정
    setOpenModal(true); // 모달 열기
  };

  return (
    <div className={`${className}`}>
      <div className="info-box">
        <div className="newBest-box">
          {item.new && <span className="new">{item.new}</span>}
          {item.best && <span className="best">{item.best}</span>}
        </div>
        <div className="title-box">
          <h3 className="title">{item.title}</h3>
          {share && <button className="share-btn"></button>}
        </div>
        <div className="price-wrap">
          <div className="price-box">
            <h4 className="price">{item.price}원</h4>
            {item.sale && (
              <div className="sale-box">
                <h4 className="sale">{item.sale}<span>%</span></h4>
                <h4 className="newPrice">{item.newPrice}원</h4>
              </div>
            )}
          </div>
          {coupon && <button onClick={handleClick} className="coupon-btn">쿠폰받기</button>}
        </div>
      </div>

      {/* 쿠폰 모달 */}
      {openModal && (
        <PopupModal open={openModal} setOpen={setOpenModal} width={'660px'}>
          <div className="p-5 pt-11 w-full">
            {selectedCoupons.length > 0 ? (
              selectedCoupons.map((coupon, index) => (
                <div key={index}>
                  <div className="coupon-item">
                    <h4>{coupon.title}</h4>
                    <p>{coupon.text}</p>
                    {coupon.downLoad}
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center pb-5'>
                <p className='text-[14px] text-[#757575]'>할인 가능한 쿠폰이 없습니다.</p>
              </div>
            )}
            <button>쿠폰 모두 받기</button>
          </div>
        </PopupModal>
      )}
    </div>
  );
};

export default PriceBox;
