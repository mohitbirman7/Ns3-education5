import React from 'react'
import '../../../assets/css/footer/Footerr.css'

const footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerlinks">
          <div className="ftr ftrbase1">
            <div className="subfooter1">
              <img className='ns3' src="/footer/ns3.png" alt="nse logo" />
              <p>Welcome to NS3EDU, where we're dedicated to crafting IT Networking, Cloud Engineering, Cyber Security and Software Engineering experts through top-notch training and certification programs.</p>
              <div className="footersocal">
                <img src="/footer/fb.png" alt="facebook" />
                <img src="/footer/ista.png" alt="instagram" />
                <img src="/footer/ldin.png" alt="linkdin" />
                <img src="/footer/ytb.png" alt="youtube" />
              </div>
            </div>
          </div>
          <div className="ftr ftrbase2">
            <div className="subfooter2">
              <h2>Important Links</h2>
              <ul >
                <li><a href="/">About Us</a></li>

                <li><a className='acr' href="/">Cultre in NS3</a></li>
                <li><a className='acr' href="/">Free Mock Test</a></li>
                <li><a className='acr' href="/">Career</a></li>
                <li><a className='acr' href="/">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="ftr ftrbase3">
            <div className="subfooter3">
              <h2>Browse Categories</h2>

              <ul>
                <li> <a href="/">IT Networking</a></li>
                <li><a href="/">Cloud Engineering</a></li>
                <li>  <a href="/">Cyber Security</a></li>
                <li><a href="">Programming Language</a></li>
              </ul>
            </div>
          </div>
          <div className="ftr ftrbase4">
            <div className="subfooter4">
              <h2>Resources</h2>

              <ul>
                <li><a href="/">Gallery</a></li>
                <li><a href="/">Blog</a></li>
                <li> <a href="/">Events</a></li>
                <li><a href="">testimonials</a></li>
                <li> <a href="/">Summer Internship</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='hr1' />
        <div className="termAndConditions">
          <p className='wrp'>
            <span>Terms & Conditions</span>
            <span>Refund Policy</span>
            <span>Privacy Policy</span>
            <span>Free Mock Test</span>
            <span>Corporate Training</span>
            <span>Learn & Earn</span>
            <span>Placements</span>
            <span>Career</span>
            <span className='lastspan'>Contact Us</span>
          </p>
        </div>
        {/* copyright area */}
        <div className="copyright">
          <div className="only-contant">
            <div className="copy-right-line">
              <p>Copyright & Designed by Niawebsolutions</p>
            </div>
            <div className="number">
              <img src="/footer/whatsup.png" alt="wtsup" />
              <div className="num-combine">
                <p className='nm'>Have a question ? Call us 24/7</p>
                <h2><a className='nm' href="">(+91)8800011138</a></h2>
              </div>
            </div>
            <div className="email">
              <div className="full-email">
                <img src="/footer/email.png" alt="email-logo" />
                <input type="Email" placeholder='Enter Email' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default footer
