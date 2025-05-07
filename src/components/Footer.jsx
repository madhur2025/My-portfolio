import '../styles/Footer.css'
const Footer = () => {
  return (
    <section id='footer'>
      <div className='footer-div footer-logo'>
        <h2>Madhur-portfolio<span>*</span></h2>
        <p>© 2025 All rights reserved.</p>
      </div>

      <div className='footer-div'>
        <h3 className='quick-link-heading'>Quick links</h3>
        <a className='quick-link-elements' href="#about">About</a>
        <a className='quick-link-elements' href="#certi-div">Certifications</a>
        <a className='quick-link-elements' href="#project-sec">Projects</a>
        <a className='quick-link-elements' href="#social-handles">Contact</a>
      </div>

      <div className='footer-div'>
        <h3 className='quick-link-heading'>Contacts</h3>
        <a className='quick-link-elements' href="tel:+918769376935">+91 8769376935</a>
        <a className='quick-link-elements' href="mailto:madhusudansharma2324@gmail.com">madhusudansharma2324@gmail.com</a>
        <a className='quick-link-elements'>Address : Kota, Rajasthan, India</a>
      </div>
    </section>
  )
}

export default Footer