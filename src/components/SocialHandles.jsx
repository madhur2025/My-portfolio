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
      <h2 className='headings'>My<span className='headings-span'> Social </span>Handles</h2>
      <div id='social-box'>

        <div className='icon-link'>
          <a className='icon-names' href="tel:+918769376935"><img className='social-icons' src={calling} />Calling</a>
        </div>
      
        <div className='icon-link'>
          <a className='icon-names' href="https://wa.me/8769376935"><img className='social-icons' src={whatsapp} />WhatsApp</a>
        </div>
        
        <div className='icon-link'>
          <a className='icon-names' href="https://www.instagram.com/madhurr.sharma?igsh=MXFtdnNoZmpsYmFqNQ=="><img className='social-icons' src={instagram} />instagram</a>
        </div>
        
        <div className='icon-link'>
          
          <a className='icon-names' href="https://x.com/Madhurr2025"><img className='social-icons' src={twitter} />Twitter</a>
        </div>
        
        <div className='icon-link'>
          
          <a className='icon-names' href="mailto:madhusudansharma2324@gmail.com"><img className='social-icons' src={mail} />E-mail</a>
        </div>
        
        <div className='icon-link'>
          
          <a className='icon-names' href="https://github.com/madhur2025"><img className='social-icons' src={github} alt="" />Git hub</a>
        </div>
        
        <div className='icon-link'>  
          <a className='icon-names' href="https://www.linkedin.com/in/madhusudan-sharma-k24169/"><img className='social-icons' src={linkedin} />Linkedin</a>
        </div>
      
      </div>
    </section>
  )
}

export default SocialHandles