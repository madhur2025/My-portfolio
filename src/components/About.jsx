import React from 'react'
import '../styles/About.css'
import madhur from '../assets/IMG_20231226_183648-01.jpeg'
const About = () => {
  return (
    <section id="about">
        <h2 className='headings'>About <span className='headings-span'>me</span></h2>
      <div id='img-info'>
      <img id="about-img" src={madhur}></img>
      <div id="detail-box">
        <p>An organized and motivated individual, Seeking entry-level opportunities to enhance abilities while contributing to company growth.</p>
        <h3>Name : <span>Madhusudan sharma</span></h3>
        <h3>Date of birth : <span>9 February 2001</span></h3>
        <h3>Address : <span>Kota, Rajasthan, India</span></h3>
        <h3>E-mail : <span><a href="mailto:madhusudansharma2324@gmail.com">madhusudansharma2324@gmail.com</a></span></h3>
        <h3>Phone : <span><a href="tel:+918769376935">+91 8769376935</a></span></h3>
      </div>
    </div>
    </section>
  )
}

export default About