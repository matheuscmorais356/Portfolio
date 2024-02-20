import "./About.css"

import { HiDownload } from "react-icons/hi"
import {
  SiMicrosoftsqlserver,
  SiGit,
  SiPython,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNodedotjs,
} from "react-icons/si";

import myPhoto from "../../assets/myPhoto.jpg";
import curriculumPdf from "../../assets/curriculo-Matheus-Cardoso-Morais.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="content">
          <div className="wrapper-description">
            <div className="container-image">
              <div className="container-image__inner">
                <img className="about__image" src={myPhoto} alt="Foto de Matheus Cardoso Morais" />
              </div>
            </div>
            <div className="description">
              <h2 className="description__title">Sobre mim</h2>
              <div>
                <p className="description__text">
                  Meu nome é Matheus Cardoso Morais, sou técnico em desenvolvimento de sistemas e atualmente estou cursando análise e desenvolvimento de sistemas na Faculdade Impacta.
                </p>
                <p className="description__text">
                  Meu primeiro contato com programação foi em 2019, quando iniciei o curso de desenvolvimento de sistemas, porém só comecei a dar o devido foco em 2021, quando conheci o desenvolvimento web. Desde então, desenvolvi diversos projetos pessoais e acadêmicos, participei de diversos bootcamps da Rocketseat, entre outros...
                </p>
              </div>
              <a 
                className="description__btn btn-outline" 
                href={curriculumPdf}
                download="curriculo-Matheus-Cardoso-Morais.pdf"
              >
                <HiDownload className="description__icon-btn" />
                Curriculo
              </a>
            </div>
          </div>
          <div className="skills">
            <div className="skills-header">
              <span className="skills__line"></span>
              <h3 className="skills__title">Habilidades</h3>
              <span className="skills__line"></span>
            </div>
            <div className="technologies">
              <div className="container-icon">
                <SiMicrosoftsqlserver className="technologies__icon" />
                <p className="technologies__title" >SQL Server</p>
              </div>
              <div className="container-icon">
                <SiGit className="technologies__icon" />
                <p className="technologies__title" >Git</p>
              </div>
              <div className="container-icon">
                <SiPython className="technologies__icon" />
                <p className="technologies__title" >Python</p>
              </div>
              <div className="container-icon">
                <SiNodedotjs className="technologies__icon" />
                <p className="technologies__title" >Node.js</p>
              </div>
              <div className="container-icon">
                <SiReact className="technologies__icon" />
                <p className="technologies__title" >React</p>
              </div>
              <div className="container-icon">
                <SiRedux className="technologies__icon" />
                <p className="technologies__title" >Redux</p>
              </div>
              <div className="container-icon">
                <SiJavascript className="technologies__icon" />
                <p className="technologies__title" >JavaScript</p>
              </div>
              <div className="container-icon">
                <SiHtml5 className="technologies__icon" />
                <p className="technologies__title" >HTML</p>
              </div>
              <div className="container-icon">
                <SiCss3 className="technologies__icon" />
                <p className="technologies__title" >CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About