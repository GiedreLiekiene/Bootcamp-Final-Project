import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const SocialsLinks = () => {
  return (
    <div><div className="contactUs-section">
    <h1 className="contactUs-section-title">Socials</h1>
    <p className='social-icon'> <a href="https://www.facebook.com"><FaFacebookF/>  Facebook</a></p>
    <p className='social-icon'><a href="https://www.twitter.com"><FaTwitter/>  Twitter</a></p>
    <p className='social-icon'><a href="https://www.instagram.com"><FaInstagramSquare />  Instagram</a></p>
</div></div>
  )
}

export default SocialsLinks