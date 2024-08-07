import React, { useState } from 'react'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import './Best.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BestItem from './BestItem'
import BestList from './bestList.Data'

const CustomPrevButton = ({ onClick }) => (
  <button onClick={onClick} className="prev-button"></button>
);

const CustomNextButton = ({ onClick }) => (
  <button onClick={onClick} className="next-button"></button>
);

const Best = () => {
  const [open, setOpen] = useState(false);
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
            <BestItem key={index} best={best} setOpen={setOpen} setSelectedBest={setSelectedBest} />
        ))}
      </Slider>
      {open && <BestModal setOpen={setOpen} open={open} best={selectedBest} />}
    </div>
  )
}

// BestModal
const BestModal = ({ open, setOpen, best }) => {
  return (
    <div className="fixed left-0 top-0 w-full h-screen z-10 flex justify-center items-center bg-black bg-opacity-50">
      <motion.div
        className="relative bg-white w-[880px] h-[600px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 1, stiffness: 200 }}
      >
          <button className="close-btn absolute top-0 right-0" onClick={() => setOpen(false)}/>
          <div className='flex h-full'>
            <div style={{width: '55%', background: `url(${best.src}) center no-repeat`, backgroundSize: 'cover'}}></div>
            <div className={`p-5 pt-12 w-[45%]`}>
              <div>
                <p>
                  {best.new && <span className={`text-[#CF0A2C] mx-[4px] text-xs font-bold`}>{best.new}</span>}
                  {best.best && <span className={`text-[#0A2ACF] mx-[2px] text-xs font-bold`}>{best.best}</span>}
                </p>
              </div>
              <div>
                <h3 className={`text-base mb-2 text-[#282828]`}>{best.title}</h3>
                <h4 className={`text-base text-[#757575]`}>{best.price}원</h4>
                <button>쿠폰받기</button>
              </div>
              <button>상세보기</button>
            </div>
          </div>
      </motion.div>
    </div>
  )
}

export default Best
