import "./Contact.css";

// Icons
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { LiaLinkedinIn, LiaGithub } from "react-icons/lia";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import SocialLinks from "../SocialLinks/SocialLinks";

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrapper">
        <div className="content">
          <div className="contact-wrapper-infos">
            <div className="contact-infos-inner">
              <h2 className="contact__title">
                Entre em contato<span>.</span>
              </h2>
              <span className="contact__text">para que possamos conversar mais sobre...</span>
            </div>
            <div className="contact-infos-inner">
              <div className="contact-infos">
                <HiOutlineMail className="contact__icon" />
                <span className="contact__text">matheuscmorais356@gmail.com</span>
              </div>
              <div className="contact-infos">
                <HiOutlineLocationMarker className="contact__icon" />
                <span className="contact__text">Mauá - SP</span>
              </div>
            </div>
            
            <SocialLinks outline={ true } />
          </div>

          <div className="contact-form">
            <form className="contact__form" action="https://api.staticforms.xyz/submit" method="post" >
              <input className="contact__input" type="text" name="name" placeholder="Digite seu nome" autoComplete="off" required />
              <input className="contact__input" type="text" name="email" placeholder="digite seu email" autoComplete="off" required />
              <textarea className="contact__textarea" cols="30" rows="10" name="message" placeholder="Digite sua menssagem..." required />
              <button className="contact-form__btn" type="submit">Enviar</button>

              <input type="hidden" name="accessKey" value="42284c99-4db2-4731-8774-1e85dbb9076d" />
              <input type="hidden" name="redirectTo" value="http://localhost:3000/#contact" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;