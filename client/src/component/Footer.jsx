import React from 'react';
import {Link} from 'react-router-dom';
import Contactus from '../component/Footer/Contactus.jsx';
import  Asoc from '../component/Footer/Asoc.jsx';
import Upliftproject from '../component/Footer/Upliftproject.jsx';
import Codeofconduct from '../component/Footer/Codeofconduct.jsx';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faDiscord, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'; // Importing social media icons from the brands category
function Footer() {
  return (
    <footer>
      <div className='Container'>
        <div className='About_us'>
          <div className='About_note'>
            <a href="#">
              <h1>Open source <span>Code</span></h1>
            </a>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Quae, magnam odit dignissimos necessitatibus
                  saepe harum quod tempore minus.</p>
            <a href="#">Explore more</a>
          </div>
        </div>
        <div className="new_Details">
          <div>
            <ul>
              {/* <li><Link to="/Codeofconduct">Code of Conduct</Link></li> */}
              <li><a href="Contact.jsx">Contact us</a></li>
              <li><a href="Codeofconduct.jsx">Code of Conduct</a></li>
            </ul>
          </div>
        </div>
        <div className="Legal">
          <div>
            <ul>
              <li><a href="#">ASOC</a></li>
              <li><a href="#">Uplift project</a></li>
            </ul>
          </div>
        </div>
        <div className="social">
          <div>
            <h4>Follow us on</h4>
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faDiscord} /> Discord</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <h4 className='copyright'>© 2024 open source. Made with 🖤 by Jitendra , Harshit & Anuj. All rights reserved.</h4>
    </footer>
  )
}

export default Footer;
