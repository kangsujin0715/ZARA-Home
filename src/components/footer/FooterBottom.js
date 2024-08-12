import React from 'react'
import { footerCompanyInfo, footerAppItems, footerBottomInfoItems } from './FooterList.Data'
import FooterDataGroup from './FooterDataGroup'

const FooterBottom = () => {
  return (
    <div className="bottom">
      <div className={`w-[1180px] m-auto`}>
        <div className='bottom-info-box'>
          <ul className='company-info-box'>
            {footerCompanyInfo.map((item, index) => <li key={index}><p>{item.info}</p></li>)}
          </ul>
          <FooterDataGroup title="Follow" items={footerBottomInfoItems} />
          <FooterDataGroup title="APP Download" items={footerAppItems} />
        </div>
      </div> 
    </div>
  )
}

export default FooterBottom
