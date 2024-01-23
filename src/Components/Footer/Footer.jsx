import React from 'react'
import './Footer.css'
import pic1 from '../../assets/Group 29.png'
import pic2 from '../../assets/Icon ionic-ios-send.png'
const Footer = () => {
  return (
    <footer className='footer'>

      <div className="footer-div">

        <img src={pic1} alt="" className='ch1' />

        <div className="ch2">
          <div className='bb'>product</div>
          <div className="ch-2-c">Connection</div>
          <div className="ch-2-c">Protocols</div>
          <div className="ch-2-c">Pesrsonas</div>
          <div className="ch-2-c">Integrations</div>
          <div className="ch-2-c">Catalog</div>
          <div className="ch-2-c">Pricing</div>
          <div className="ch-2-c">Security</div>
          <div className="ch-2-c">GDPR</div>
        </div>

        <div className="ch3">

          <div className="bb">Developers</div>
          <div className="ch-2-c">Docs</div>
          <div className="ch-2-c">API</div>
          <div className="ch-2-c">Open Source</div>
        

        </div>

        <div className="ch4">
          <div className="bb">Company</div>
          <div className="ch-2-c">Careers</div>
          <div className="ch-2-c">Blog</div>
          <div className="ch-2-c">Press</div>
        </div>


        <div className="ch5">
          <div className="bb">Support</div>
          <div className="ch-2-c">Help Center</div>
          <div className="ch-2-c">Contact Us</div>
          <div className="ch-2-c">Security</div>
          <div className="ch-2-c">Bulletins</div>
          <div className="ch-2-c">Documentation</div>
          <div className="ch-2-c">Partner</div>
          <div className="ch-2-c">Portal</div>
        </div>

        <div className="ch6">
        <div className="bb">NewsLetter</div>

        <div className='email ch-2-c email-2'>
       
         <input type="email" name="" id="" className='email e1'  placeholder='email' /> 
         <img src={pic2} alt="" className='email-img' />
        </div>
    
        </div>





      </div>

    </footer>
  )
}

export default Footer