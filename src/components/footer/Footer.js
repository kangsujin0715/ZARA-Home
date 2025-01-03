import React from 'react'
import './Footer.css';
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'


const Footer = () => {
  return (
    <div className={`w-full`}>
      <footer>
          <FooterTop/>
          <FooterBottom/>
      </footer>
    </div>
  )
}

export default Footer
