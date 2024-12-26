import React, { useState } from 'react'
import Slider from 'react-slick';
import './Best.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BestItem from './BestItem'
import BestList from './bestList.Data'
import PriceBox from './PriceBox';
import PopupModal from '../common/popup/popup';

const CustomPrevButton = ({ onClick }) => (
  <button onClick={onClick} className="prev-button"></button>
);

const CustomNextButton = ({ onClick }) => (
  <button onClick={onClick} className="next-button"></button>
);

const Best = () => {

   const [openModal, setOpenModal] = useState(false); // 쿠폰 모달 열기 상태 관리
  
  const [selectedBest, setSelectedBest] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    responsive: [
      {
        breakpoint: 1024, // 화면 크기가 1024px 이하일 때
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600, // 화면 크기가 600px 이하일 때
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={`w-full border-t border-solid border-[#C1C1C1]`}>
      <h2 className='main-title'>BEST PICK</h2>
      <Slider {...settings}>
        {BestList.map((best, index) => (
            <BestItem key={index} best={best} setOpen={setOpenModal} setSelectedBest={setSelectedBest} />
        ))}
      </Slider>

      {openModal &&
        <PopupModal setOpen={setOpenModal} open={openModal} best={selectedBest} width={'880px'} height={'600px'}>
            <img src={`${selectedBest.src}`} alt={`${selectedBest.title} 이미지`}/>
            <div className='p-5 pt-11 grow'>
              <PriceBox item={selectedBest} className="price-info" />
            </div>
        </PopupModal>
      }
    </div>
  )
}

export default Best
