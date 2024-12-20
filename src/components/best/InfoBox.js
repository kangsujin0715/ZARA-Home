import React from 'react'

const InfoBox = ({ item, share = true, coupon = true }) => {
  return (
    <div className='info-box'>
      <div className='newBest-box'>
          {item.new && <span className='new'>{item.new}</span>}
          {item.best && <span className='best'>{item.best}</span>}
      </div>
      <div className='title-box'>
        <h3 className='title'>{item.title}</h3>
        {share && <button className="share-btn"></button>}
      </div>
      <div className='price-wrap'>
        <div className='price-box'>
          <h4 className='price'>{item.price}원</h4>
          {item.sale &&
            <div className='sale-box'>
              <h4 className='sale'>{item.sale}<span>%</span></h4>
              <h4 className='newPrice'>{item.newPrice}원</h4>
            </div>
          }
        </div>
        {coupon && <button className='coupon-btn'>쿠폰받기</button>}
      </div>
    </div>
    )
}

export default InfoBox