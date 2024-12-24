import React from 'react';
import Icon from './Icon'; // 올바른 경로로 수정

const IconButton = ({ icon, alt, bgColor, size, ...props }) => {
  return (
    <button {...props} 
    style={{ backgroundColor: bgColor }} 
    className="icon-button flex"
    >
      <Icon
        name={icon} // 아이콘 이름을 전달
        alt={alt}
        width={size}
        height={size}
      />
    </button>
  );
};

export default IconButton;

