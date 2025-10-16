import React from 'react';
import './Footer.css';
import facebook from '../../assests/fcaebook.svg'
import twitter from '../../assests/twitter.svg'
import youtube from '../../assests/youtube.svg'
import instagram from '../../assests/instagram.svg'
import payment from '../../assests/payment.svg'


export default function Footer() {
  return (
    <footer className="flipkart-footer">
      <div className="footer-top">
        <div className="footer-contact">
          <h4>ABOUT</h4>
          <ul>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>ShopEase Stories</li>
            <li>Press</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>GROUP COMPANIES</h4>
          <ul>
            <li>Myntra</li>
            <li>Cleartrip</li>
            <li>Shopsy</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>HELP</h4>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>CONSUMER POLICY</h4>
          <ul>
            <li>Cancellation & Returns</li> 
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
            <li>Grievance Redressal</li>
            <li>EPR Compliance</li>
          </ul>
        </div>

        <div className="footer-contactaddress">
          <h4>Mail Us:</h4>
          <p>
            ShopEase Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road,<br />
            Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>

          <h4>Social:</h4>
          <div className="social-icons">
            <span><img src={facebook} alt="facebook" /></span>
            <span><img src={twitter}alt="twitter" /></span>
            <span><img src={youtube} alt="youtube" /></span>
            <span><img src={instagram} alt="instagram" width={20} /></span>

          </div>
        </div>

        <div className="footer-contactaddress">
          <h4>Registered Office Address:</h4>
          <p>
           ShopEase Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India<br /><br />
            CIN : U51109KA2012PTC066107<br />
            Telephone: <a href="tel:044-45614700">044-45614700</a> /
            <a href="tel:044-67415800">044-67415800</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div>🛒 Become a Seller</div>
        <div>📢 Advertise</div>
        <div>🎁 Gift Cards</div>
        <div>❓ Help Center</div>
        <div>© 2007-2025 ShopEase.com</div>
        <img src={payment} alt="payments" />
      </div>
    </footer>
  );
}
