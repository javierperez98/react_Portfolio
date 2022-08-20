import "./about.scss";
import self from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { MdSchool, MdPerson } from "react-icons/md";

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
      icon: <MdPerson className="about-icon" size={25} />,
      title: "Background",
      text: "Military Veteran",
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
            Hello my name is Javier and I’m a Full Stack web developer from
            South Florida. Prior to my career in Web Development, I served four
            year active duty in the US Navy. I then enrolled at the University
            of California San Diego’s Coding Bootcamp where I earned a
            Certificate in Full Stack Web Development. My passion is technology
            and computers. I love coding, exploring new languages and their
            possibilities.
          </p>
          <a href="#contact" className="btn btn-prime">
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};
