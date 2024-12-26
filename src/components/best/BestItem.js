import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PriceBox from './PriceBox';
import IconButton from '../common/Icon/IconButton';

const BestItem = ({ best, setOpen, setSelectedBest }) => {
  const [heart, setHeart] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const handleClick = () => {
    setSelectedBest(best);
    setOpen(true);
  }

  return (
    <div className="cursor-pointer mx-[2px] relative">
      <div className="flex justify-between">
        <div className="absolute top-0 left-0 z-[3]">
          <IconButton 
              onClick={handleClick}
              icon='whitePlus' 
              alt="더보기"
            />
        </div>
        <div className="absolute top-0 right-0 z-[3]">
          <IconButton 
            onClick={() => setHeart(!heart)} 
            icon={heart ? 'redHeartFill' : 'redHeart'} 
            alt="관심목록" 
          />
        </div>
      </div>
      <Link to={`/best/${best.id}`}>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="w-full h-full bg-black absolute top-0 left-0 z-[2]"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animate={{ opacity: hovered ? 0.5 : 0 }}
            />
            <img src={best.src} alt={best.alt || '상품 이미지'} />
          </div>
        </div>
        <PriceBox item={best} share={false} coupon={false} />
      </Link>
    </div>
  );
}

export default BestItem;
