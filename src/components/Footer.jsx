import React from 'react'
import '../styles/Footer.css'
import calling from '../assets/icons/icons8-call-50.png'
import mail from '../assets/icons/icons8-mail-50.png'
import address from '../assets/icons/icons8-pin-50.png'
const Footer = () => {
  return (
    <section id='footer'>
      <div className='footer-div footer-logo'>
        <p>© 2025 Madhur. All rights reserved.</p>
        <h2><span>*</span>Madhur-portfolio</h2>
      </div>
      <div className='footer-div quick-links-list'>
        <h3 className='quick-link-heading'>Quick links</h3>
        <ul id='list-ul'>
          <li><a className='quick-link-elements' href="#about">About</a></li>
          <li><a className='quick-link-elements' href="#certi-div">Certifications</a></li>
          <li><a className='quick-link-elements' href="#project-sec">Projects</a></li>
          <li><a className='quick-link-elements' href="#social-handles">Contact</a></li>
          <li><a className='quick-link-elements' href="https://x.com/Madhurr2025">Twitter</a></li>
          <li><a className='quick-link-elements' href="https://www.instagram.com/madhurr.sharma?igsh=MXFtdnNoZmpsYmFqNQ==">instagram</a></li>
        </ul>
      </div>
      <div className='footer-div'>

        <div className='icon-link'>
          <img className='footer-icons' src={calling} />
          <a className='icon-names' href="tel:+918769376935">+91 8769376935</a>
        </div>

        <div className='icon-link'>
          <img className='footer-icons' src={mail} />
          <a className='icon-names' href="mailto:madhusudansharma2324@gmail.com">madhusudansharma2324@gmail.com</a>
        </div>

        <div className='icon-link'>
          <img className='footer-icons' src={address} alt="" />
          <a className='icon-names' href="">Kota, rajasthan, india</a>
        </div>
      </div>
    </section>
  )
}

export default Footer