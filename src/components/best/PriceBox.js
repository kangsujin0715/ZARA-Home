import React, { useState } from 'react';
import PopupModal from '../common/popup/popup';
import CouponItem from '../common/CouponList/CouponItem';
import CouponListData from '../common/CouponList/couponList.Data';
import IconButton from '../common/Icon/IconButton';

const PriceBox = ({ item, share = true, coupon = true, className }) => {
  const [openModal, setOpenModal] = useState(false); // 쿠폰 모달 상태
  const [selectedCoupons, setSelectedCoupons] = useState([]); // 초기값 빈 배열

  const handleClick = () => {
    // 쿠폰 데이터를 검색
    const couponData = CouponListData.find(coupon => coupon.detail.some(detail => detail.id === item.id));
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
          {share && <IconButton icon="share" />}
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
        <PopupModal open={openModal} setOpen={setOpenModal} width={'440px'}>
          <div className="p-5 pt-11 w-full text-center">
            <h2 className='text-left mb-[16px] font-bold'>{CouponListData[0].title}</h2>
              <CouponItem coupons={selectedCoupons} />
          </div>
        </PopupModal>
      )}
    </div>
  );
};

export default PriceBox;
