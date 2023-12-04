import "./SocialLinks.css";

// Icons
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/matheuscmorais356" target="_blank" rel="noopener noreferrer">
        <FaGithub className="social-links__icon" />
      </a>
      <a href="https://www.linkedin.com/in/matheus-cardoso356/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="social-links__icon" />
      </a>
      
      <span className="social-links__line"></span>
    </div>
  )
}

export default SocialLinks;