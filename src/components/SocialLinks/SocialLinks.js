import "./SocialLinks.css";

// Icons
import { LiaLinkedinIn, LiaGithub  } from "react-icons/lia";

const SocialLinks = ({ outline = false }) => {
  return (
    <div className="social-links">
            <a 
              className={outline ? "social-links__btn social-links__btn--outline" : "social-links__btn social-links__btn--filled"} 
              href="https://github.com/matheuscmorais356"
              target="_blank"
              rel="noreferrer"
            > 
              <LiaGithub  className="social-links__icon"/>
              GitHub
            </a>
            <a 
              className={outline ? "social-links__btn social-links__btn--outline" : " social-links__btn social-links__btn--filled"} 
              href="https://www.linkedin.com/in/matheus-cardoso356/"
              target="_blank"
              rel="noreferrer"
            > 
              <LiaLinkedinIn className="social-links__icon"/>
              Linkedin
            </a>
          </div>
  )
}

export default SocialLinks;
