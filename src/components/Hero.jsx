import React from 'react'
import '../styles/Hero.css'
const Hero = () => {
  return (
    <section id="hero">
      <div>
      <h1 id="hello-world">HELLO, WORLD.</h1>
      <h2 id="madhur">I'm Madhur sharma.</h2>
      <h3 id="passion">
        <span className='hero-span'> | </span>FRONT-END
        
        <span className='hero-span'> | </span>REACT
        <span className='hero-span'> | </span>MERN
        <span className='hero-span'> | </span>
      </h3>
        <a href="#about"><button id="know-more">More about me</button></a>
      </div>
    </section>
  )
}

export default Hero