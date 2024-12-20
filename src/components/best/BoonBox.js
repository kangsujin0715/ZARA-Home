import React from 'react'
import { Link } from 'react-router-dom'

const BoonBox = () => {
  return (
    <div className='boon-box'>
                <ul className='boon-info-box'>
                  <li className='list'>
                    <h6>신규회원 혜택가</h6>
                    <p>신규 기입시 10% 쿠폰 즉시 지급</p>
                  </li>
                  <li className='list'>
                    <h6>추가 혜택가</h6>
                    <p>SmilePay 할인 6,248원 할인</p>
                  </li>
                  <li className='list'>
                    <h6>포인트 적립</h6>
                    <p>893 p 적립</p>
                  </li>
                  <li className='list'>
                    <h6>배송비</h6>
                    <p>무료 (제주 : 3,000원 / 도서산간 : 5,000원  추가)</p>
                  </li>
                </ul>
                <div className='line-box'>
                  <Link className='line-btn'>추가혜택 더보기</Link>
                  <div className='border'></div>
                </div>
            </div>
    )
}

export default BoonBox