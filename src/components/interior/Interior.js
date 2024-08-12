import React from 'react'
import './Interior.css';
import interiorList from './interiorList.Data';

const Interior = () => {
  return (
    <div className={`w-full`}>
      <h2 className='main-title'>INTERIOR</h2>
      <ul className='interior-box'>
        {interiorList.map((item, index) => (
          <li className='item' key={index}
          > 
            <a href={item.title} style={{ background : `url(${item.src}) center no-repeat`}}>
              <span className='title'>{item.title}</span>
              <div className='bg-box'></div> 
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Interior
