import '../styles/SocialHandles.css'
function SocialHandles() {
  return (
    <section id='social-handles'>
      <h2 className='headings'>My<span className='headings-span'> Social </span>Handles</h2>

      <div id='icon-wrapper'>

        <a className='icon-names' href="tel:+918769376935">
          <div className='icon-link'>
            <div class="icon"><i class="fas fa-phone"></i></div>
            <span>Calling</span>
          </div>
        </a>

        <a className='icon-names' href="https://wa.me/8769376935">
          <div className='icon-link'>
            <div class="icon"><i class="fab fa-whatsapp"></i></div>
            <span>Whatsapp</span>
          </div>
        </a>

        <a className='icon-names' href="https://www.instagram.com/madhurr.sharma?igsh=MXFtdnNoZmpsYmFqNQ==">
          <div className='icon-link'>
            <div class="icon"><i class="fab fa-instagram"></i></div>
            <span>Instagram</span>
          </div>
        </a>

        <a className='icon-names' href="https://x.com/Madhurr2025">
          <div className='icon-link'>
            <div class="icon"><i class="fab fa-twitter"></i></div>
            <span>Twitter</span>
          </div>
        </a>

        <a className='icon-names' href="mailto:madhusudansharma2324@gmail.com">
          <div className='icon-link'>
            <div class="icon"><i class="fab fa-envelope"></i></div>
            <span>E-mail</span>
          </div>
        </a>

        <a className='icon-names' href="https://github.com/madhur2025">
          <div className='icon-link'>
            <div class="icon"><i class="fab fa-github"></i></div>
            <span>GitHub</span>
          </div>
        </a>

        <a className='icon-names' href="https://www.linkedin.com/in/madhusudan-sharma-k24169/">
          <div className='icon-link'>
            <div class="icon"> <i class="fab fa-linkedin"></i></div>
            <span>Linkedin</span>
          </div>
        </a>

      </div>
    </section>
  )
}

export default SocialHandles