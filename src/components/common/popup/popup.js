import React from 'react';
import { motion } from 'framer-motion';
import IconButton from '../Icon/IconButton';

const PopupModal = ({ open, setOpen, children, width, height = 'auto'}) => {
  return (
    <div className="fixed left-0 top-0 w-full h-screen z-10 flex justify-center items-center bg-black bg-opacity-50">
      <motion.div
        className={`relative bg-white h-[auto] overflow-hidden`}
        style={{ width: width, height: height }}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 1, stiffness: 200 }}
      >
        <div className="absolute top-[10px] right-[10px]">
          <IconButton onClick={() => setOpen(false)} icon='close'/>
        </div>
        <div className='flex h-full'>
            {children}
        </div>
      </motion.div>
    </div>
  );
};

export default PopupModal;
