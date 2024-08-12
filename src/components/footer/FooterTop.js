import React from 'react'
import { footerTopInfoItems } from './FooterList.Data'

const FooterTop = () => {
  return (
    <div className='top'>
      <div className={`w-[1180px] m-auto`}>
        <div className='list-wrap'>
            {footerTopInfoItems.map((item, index) => (
              <div className='list-box' key={index}>
                <h5>{item.title}</h5>
                <ul>
                  {item.info.map((item, index) => <li  key={index}><a href='#'>{item}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default FooterTop
