import "./Navbar.css";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  
  const handleOpenMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.add("menu--open")
  }
  
  const handleCloseMenu = () => {
    const menu = document.querySelector(".menu");
    menu.classList.remove("menu--open")
  }

  return (
    <nav className="navigation">
      <div className="wrapper">
        <a href="#home" className="logo">
          &lt; <span className="logo__text">MCM</span> &frasl; &gt;
        </a>
        <div className="menu">
          <button className="btn-close-menu" onClick={handleCloseMenu}>
            <IoMdClose className="btn-menu__icon" />
          </button>
          <button className="btn-open-menu" onClick={handleOpenMenu}>
            <HiMenuAlt3 className="btn-menu__icon" />
          </button>

          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="#home" onClick={handleCloseMenu}>Home</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#about" onClick={handleCloseMenu}>Sobre</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#projects" onClick={handleCloseMenu}>Projetos</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#contact" onClick={handleCloseMenu}>Contato</a>
            </li>
          </ul>

          <div className="social-links">
            <a href="https://github.com/matheuscmorais356" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-links__icon" />
            </a>
            <a href="https://www.linkedin.com/in/matheus-cardoso356/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-links__icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;