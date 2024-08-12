import React from 'react'
import './Footer.css';
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'


const Footer = () => {
  return (
    <div className={`w-full mt-[270px]`}>
      <footer>
          <FooterTop/>
          <FooterBottom/>
      </footer>
    </div>
  )
}

export default Footer
