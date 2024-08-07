import React from 'react' 
import Slider from 'react-slick';
import './Sidebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BestItem from './BestItem'
import BestList from './bestList.Data'

const Best = () => {
  // const best = []  // 0~26
  // for(let a=0 ; a <3 ; a++){
  //   best.push({
  //     id: a,
  //     src : `${process.env.PUBLIC_URL}/images/best0${a + 1}.svg`,
  //     new: 'NEW',
  //     best: 'BEST',
  //     title : `그린 플로랄 어슨웨어 테이블웨어`,
  //     price: '659,000',
  //   })
  // }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />
};

  return (
    <div className={`w-full border-t border-solid border-[#C1C1C1] mt-7`}>
      <h3 className={`my-[130px] text-center`}>BEST PICK</h3>
      <Slider {...settings}>
            {
                BestList.map((best, index) => 
                <BestItem className={`w-[378px] relative cursor-pointer mx-[2px]`} key={index} best={best}/>
              )
            }
        </Slider>
    </div>
  )
}

export default Best