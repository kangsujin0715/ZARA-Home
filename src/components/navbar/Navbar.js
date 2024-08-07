import React, { useState, useEffect } from 'react';
import navbarList from './NavbarList.Data'; 
import subMenuList from './subMenuList.Data';

const logo = process.env.PUBLIC_URL + '/images/white-logo.svg';

const Navbar = ({ onOffSearchbar }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScroll, setIsScroll] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full fixed left-0 z-10 transition-colors duration-300
    ${isScroll ? 'bg-black bg-opacity-65' : ''}  ${onOffSearchbar ? 'top-[44px]' : 'top-0 bg-black'}`}>
      {/* 1depth */}
      <div className='flex w-full px-6' style={{height: '76px'}}>
        <div className='w-full flex justify-between items-center'>
          {/* zara home Logo */}
          <h1><a href="/"><img src={logo} alt='ZARA HOME' /></a></h1>
          {/* navbarList */}
          <ul className='flex gap-8 text-white text-sm h-full'>
            {navbarList.map((item, index) => (
              <li
                key={item.name}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a href={item.href} key={item.name} className='h-full flex items-center hover:opacity-50 transform transition-all duration-300'
                >{item.name}</a>
                {/* 2depth */}
                <div
                  className={`overflow-hidden absolute w-screen left-0 top-full bg-black transform transition-all duration-300 ${hoveredIndex === index ? 'max-h-screen' : 'max-h-0'} ${onOffSearchbar ? '' : 'border-t'}`}
                >
                  <div className='flex w-[700px] mx-auto pt-5 pb-2'>
                    <h3 className='w-[200px] font-bold text-white text-sm'>{item.name}</h3>
                      <ul className=''>
                        {item.subCategories.map(subItem => (
                          <li key={subItem} className='text-white text-sm hover:text-opacity-50 pb-3 transform transition-all duration-300'>
                            <a href={subItem}>{subItem}</a>
                        </li>
                        ))}
                      </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* subMenu */}
          <ul className='flex'>
            {subMenuList.map((item, index) => (
              <li key={item.name}>
                <a href={item.href}>
                  <img src={item.src} alt={item.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;