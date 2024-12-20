import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import InfoBox from './InfoBox';

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
    <div className={`cursor-pointer mx-[2px] relative`}>
      <div className='flex justify-between'>
        <button onClick={handleClick} className='plus-btn' />
        <button onClick={() => setHeart(!heart)} className={heart ? 'heart-full-btn' : 'heart-btn'} />
      </div>
      <Link to={`/best/${best.id}`}>
        <div className='relative'>
          <div className={`overflow-hidden`}>
            <motion.div
              className={`w-full h-full bg-black absolute top-0 left-0 z-[2]`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              animate={{ opacity: hovered ? 0.5 : 0 }}
            ></motion.div>
            <img src={best.src} />
          </div>
        </div>
        <InfoBox item={best} share={false} coupon={false}/>
      </Link>
    </div>
  )
}

export default BestItem