import '../style/Footer.css';
import { openMaps, openEmail } from '../helpers';

function Footer() {
  
  return (
    <div id="footer">
      <div id="footer-info">
        <div id="footer-contact">
          <div className='footer-contact-link'>
            <img src='images/icons/icons8-location-white-50.png'></img>
            <p onClick={() => {openMaps() }}>Bugujju Road</p>
          </div>
          <div className='footer-contact-link'>
            <img src='images/icons/icons8-phone-white-50.png'></img>
            <p>0782033111</p>
          </div>
          <div className='footer-contact-link'>
            <img src='images/icons/icons8-mail-white-50.png'></img>
            <p onClick={() => {openEmail('bookland@gmail.com') }}>bookland@gmail.com</p>
          </div>
        </div>
        <div id="footer-company-info">
          <p id="footer-title">ABOUT US</p>
          <p id='company-text'>We offer a tremendous gathering of books in the various classifications of Fiction, Non-fiction, Biographies, History, Religions, Self Help, and Children. We likewise move in immense accumulation of Investments and Management, Computers, Engineering, Medical, College, and School content references books proposed by various foundations as scheduled the nation over.</p>           
          <div id="footer-socials">
            <img className='footer-social-link' src="images/icons/icons8-instagram-white-50.png"></img> 
            <img className='footer-social-link' src="images/icons/icons8-facebook-white-50.png"></img>
            <img className='footer-social-link' src="images/icons/icons8-twitter-white-64.png"></img>
          </div>
        </div>
      </div>
      <p id="copyright">Copyright© 2024 BOOKLAND All rights reserved.</p>    
    </div>
  )
}

export default Footer;