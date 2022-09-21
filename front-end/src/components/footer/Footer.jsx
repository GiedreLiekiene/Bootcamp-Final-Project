import './footer.css'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer container'>
        <div className="footer-section">
            <div className="footer-section-title">YummyCooking.com</div>
            <p>Made by Giedre Liekiene, Olga Volkova and Diana Zukauskiene</p>
            <p>&copy; 2022 | All rights reserved</p>
        </div>
        <div className="footer-section">
            <div className="footer-section-title">Contact Us</div>
            <p>yammy@cooking.com</p>
            <p>+370 6060 1234</p>
            <p>Pastry str. 13, Utena, Lithuania</p>
        </div>
        <div className="footer-section">
            <div className="footer-section-title">Socials</div>
            <p className='social-icon'><FaFacebookF/>   Facebook</p>
            <p className='social-icon'><FaTwitter/>   Twitter</p>
            <p className='social-icon'><FaInstagramSquare />   Instagram</p>
        </div>
    </div>
  )
}

export default Footer