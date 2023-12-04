import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="wrapper">
        <a href="#home" className="logo">
          &lt; <span className="logo__text">MCM</span> &frasl; &gt;
        </a>
        <div>
          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#home">Home</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#about">Sobre</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#projects">Projetos</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;