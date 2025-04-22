import React from 'react'
import '../styles/Certifications.css'
import js1 from '../certificates/Cisco javaScript essesntial 1.jpg'
import js2 from '../certificates/Cisco javaScript essential 2.jpg'
import scaler from '../certificates/Reactjs Scaler.png'
import udemy from '../certificates/UC-0b37d9e8-ecb4-4fe8-b51a-915f14250c4c.jpg'
import upflairs from '../certificates/upflair.jpg'
import reactgrass from '../certificates/react grass.jpeg'
 const Certifications = () => {
  return (
    <section id='certi-div'>
      <h2 className='headings' >My <span>Certifications</span></h2>
      <div id='certifications'>
        <img className='ceti-img' src={scaler} alt="" />
        <img className='ceti-img' src={js1} alt="" />
        <img className='ceti-img' src={upflairs} alt="" />
        <img className='ceti-img' src={udemy} alt="" />
        <img className='ceti-img' src={js2} alt="" />
        <img className='ceti-img' src={reactgrass} alt="" />
      </div>
    </section>
  )
}

export default Certifications