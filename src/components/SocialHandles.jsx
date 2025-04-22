import React from 'react'
import '../styles/SocialHandles.css'
import instagram from '../assets/icons/icons8-insta-50.png';
import twitter from '../assets/icons/icons8-twitter-bird-50.png'
import mail from '../assets/icons/icons8-mail-50.png'
import github from '../assets/icons/icons8-github-logo-50.png'
import linkedin from '../assets/icons/icons8-linkedin-50.png'
import whatsapp from '../assets/icons/icons8-whatsapp-50.png'
import calling from '../assets/icons/icons8-call-50.png'
const SocialHandles = () => {
  return (
    <section id='social-handles'>
      <h2 className='headings'>My<span className='headings-span'> Social </span>handles</h2>
      <div id='social-box'>

        <div className='icon-link'>
          <img className='social-icons' src={calling} />
          <a className='icon-names' href="tel:+918769376935">Calling</a>
        </div>
      
        <div className='icon-link'>
          <img className='social-icons' src={whatsapp} />
          <a className='icon-names' href="https://wa.me/8769376935">WhatsApp</a>
        </div>
        
        <div className='icon-link'>
          <img className='social-icons' src={instagram} />
          <a className='icon-names' href="https://www.instagram.com/madhurr.sharma?igsh=MXFtdnNoZmpsYmFqNQ==">instagram</a>
        </div>
        
        <div className='icon-link'>
          <img className='social-icons' src={twitter} />
          <a className='icon-names' href="https://x.com/Madhurr2025">Twitter</a>
        </div>
        
        <div className='icon-link'>
          <img className='social-icons' src={mail} />
          <a className='icon-names' href="mailto:madhusudansharma2324@gmail.com">E-mail</a>
        </div>
        
        <div className='icon-link'>
          <img className='social-icons' src={github} alt="" />
          <a className='icon-names' href="https://github.com/madhur2025">Git hub</a>
        </div>
        
        <div className='icon-link'>
          <img className='social-icons' src={linkedin} />
          <a className='icon-names' href="www.linkedin.com/in/madhusudan-sharma-k24169">Linkedin</a>
        </div>
      
      </div>
    </section>
  )
}

export default SocialHandles