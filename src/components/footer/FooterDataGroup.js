import React from 'react';

function FooterDataGroup({ title, items }) {
  return (
    <div className='icons-info-box'>
      <h5>{title}</h5>
      <div className='items-box'>
        {items.map((item, index) => (
          <div className='item' key={index}>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <img src={item.src} alt={item.title} />
            </a>
          </div>
        ))}
      </div> 
    </div>
  );
}

export default FooterDataGroup;