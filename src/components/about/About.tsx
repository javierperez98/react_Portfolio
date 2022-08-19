import "./about.scss";
import self from "../../assets/me-about.jpg";
import { FaAward, FaCode } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import {
  SiReact,
  SiVuedotjs,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiSass,
} from "react-icons/si";

export const About = () => {
  const yearsExp = new Date().getFullYear() - 2021;
  const cards = [
    {
      icon: <FaAward className="about-icon" size={25} />,
      title: "Experience",
      text: yearsExp + "+ Years coding",
    },
    {
      icon: <MdSchool className="about-icon" size={25} />,
      title: "Education",
      text: "UCSD Coding Bootcamp",
    },
    {
      icon: <FaCode className="about-icon" size={25} />,
      title: "Languages",
      text: (
        <>
          <SiTypescript size={20} />
          <SiReact size={20} />
          <SiVuedotjs size={20} />
          <SiPython size={20} />
          <SiJavascript size={20} />
          <SiBootstrap size={20} />
          <SiSass size={20} />
        </>
      ),
    },
  ];
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={self} alt="self" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            {cards.map((card, index) => {
              return (
                <article key={index} className="about-card">
                  {card.icon}
                  <h5>{card.title}</h5>
                  <small>{card.text}</small>
                </article>
              );
            })}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            delectus voluptate minima! Totam sed temporibus suscipit optio. Et
            libero saepe porro doloribus ipsam a, dicta, totam dolore sint earum
            harum!
          </p>
          <a href="#contact" className="btn btn-prime">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};
