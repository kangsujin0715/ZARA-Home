import React from 'react'
import './Footer.css';
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'


const Footer = () => {
  return (
    <div className={`w-full mt-[270px]`}>
      <footer>
      {/* className={`mt-[130px]`} */}
          <FooterTop/>
        {/* <div className="bottom border-t py-20">
          <div className={`w-[1180px] m-auto`}>
          
          <div>
            <h6>Follow</h6>
            <div></div>
          </div>
          <div>
            <h6>APP Download</h6>
            <div></div>
          </div>
          </div>
        </div> */}
          <FooterBottom/>
      </footer>
    </div>
  )
}

export default Footer
