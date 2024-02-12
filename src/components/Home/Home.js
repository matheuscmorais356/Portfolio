import "./Home.css";

import { useEffect, useState } from "react";

// Icons
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SocialLinks from "../SocialLinks/SocialLinks";


const Home = () => {
  const [scrollVisible, setScrollVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrollVisible(false); 
    } else {
      setScrollVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home">
      <div className="wrapper">
        <div className="content">
          <div className="home__presentation">
            <h2 className="home__subtitle">Ola! eu sou</h2>
            <h1 className="home__title">Matheus Cardoso Morais</h1>
            <h2 className="home__subtitle">Desenvolvedor Front-end</h2>
          </div>

          <SocialLinks />

          {scrollVisible && (
            <span className="scroll">
              Scroll
              <MdOutlineKeyboardArrowDown className="icon" />
              <MdOutlineKeyboardArrowDown className="icon" />
            </span>
          )}
        </div>

      </div>
    </section>
  )
}

export default Home;