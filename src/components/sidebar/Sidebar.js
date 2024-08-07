import React from 'react';
import Slider from 'react-slick';
import './Sidebar.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sidebarList from './sidebarList.Data'

const CustomPrevButton = ({ onClick }) => (
    <button onClick={onClick} className="custom-prev-button"></button>
);

const CustomNextButton = ({ onClick }) => (
    <button onClick={onClick} className="custom-next-button"></button>
);

const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevButton />,
        nextArrow: <CustomNextButton />
    };

    return (
        <div style={{ marginTop: '44px' }}>
            <Slider {...settings}>
                {sidebarList.map((item, index) => (
                    <div key={index} className='relative'>
                        <div className='absolute left-0 top-0 w-full h-full bg-black bg-opacity-20'></div>
                        <a href='#' className='px-5 py-11 flex justify-center items-center text-white w-full' style={{ height:'700px', background: `url(${item.bg}) center no-repeat`}}>
                            <h3 className={`text-3xl z-[1]`}>{item.title}</h3>
                            <div className='absolute w-full bottom-11 flex justify-between items-end text-sm leading-6 px-5 whitespace-pre'>
                                <p>{item.explanation}</p>
                                <p>{item.subExplanation}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Home;
