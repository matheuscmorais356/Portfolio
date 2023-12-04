import "./Contact.css";

import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

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
                <HiOutlineMail className="contact__icon"/>
                <span className="contact__text">matheuscmorais356@gmail.com</span>
              </div>
              <div className="contact-infos">
                <HiOutlineLocationMarker className="contact__icon"/>
                <span className="contact__text">Mauá - SP</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form action="" className="contact__form">
              <input type="text" className="contact__input" placeholder="E-mail" required/>
              <input type="text" className="contact__input" placeholder="Assunto" required/>
              <textarea className="contact__textarea" cols="30" rows="10"  placeholder="Menssagem..." required />
              <button className="contact-form__btn" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;