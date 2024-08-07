import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
      <Link to={`/best/${best.href}`}>
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
        <div className='flex flex-col items-center mt-3 px-4'>
          <p>
            {best.new && <span className={`text-[#CF0A2C] mx-[4px] text-xs font-bold`}>{best.new}</span>}
            {best.best && <span className={`text-[#0A2ACF] mx-[2px] text-xs font-bold`}>{best.best}</span>}
          </p>
          <h3 className={`text-base mb-2 text-[#282828]`}>{best.title}</h3>
          <h4 className={`text-base text-[#757575]`}>{best.price}원</h4>
        </div>
      </Link>
    </div>
  )
}

export default BestItem