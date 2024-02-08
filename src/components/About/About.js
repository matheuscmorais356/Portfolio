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
  SiRedux 
} from "react-icons/si";
// import {
//   TbBrandJavascript,
//   TbBrandGit,
//   TbBrandPython,
//   TbBrandReact,
//   TbBrandHtml5,
//   TbBrandCss3,
//   TbBrandSass
// } from "react-icons/tb"

import myPhoto from "../../assets/myPhoto.jpg"

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
                Ola! Tenho 20 anos, moro em Mauá, São Paulo e sou apaixonado por tecnologia. Meu primeiro contato com programação foi em 2019 por insentivo do meu pai que trabalha na área.
                </p>
                <p className="description__text">
                Hoje sou formado em técnico em desenvolvimento de sistemas pela Etec e atualmente estou cursando Análise e Desenvolvimento de Sistemas na Faculdade Impacta. Meu objetivo é futuramente me tornar um desenvolvedor fullstack.
                </p>
              </div>
              <button className="description__btn btn-outline">
                <HiDownload className="description__icon-btn"/>
                Curriculo
              </button>
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