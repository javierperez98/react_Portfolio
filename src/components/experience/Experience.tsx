import "./experience.scss";
import {
  SiTypescript,
  SiVuedotjs,
  SiReact,
  SiJavascript,
  SiSass,
  SiBootstrap,
  SiPython,
  SiNodedotjs,
  SiDelphi,
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";

export const Experience = () => {
  enum lvl {
    e = "Experienced",
    i = "Intermediate",
    b = "Basic",
  }
  const cards = [
    {
      title: "Frontend Development",
      skills: [
        {
          icon: <SiTypescript size={25} className="exp-icon" />,
          lang: "Typescript",
          exp: lvl.e,
        },
        {
          icon: <SiVuedotjs size={25} className="exp-icon" />,
          lang: "Vue.js",
          exp: lvl.e,
        },
        {
          icon: <SiReact size={25} className="exp-icon" />,
          lang: "React,js",
          exp: lvl.i,
        },
        {
          icon: <SiJavascript size={25} className="exp-icon" />,
          lang: "Javascript",
          exp: lvl.e,
        },
        {
          icon: <SiSass size={25} className="exp-icon" />,
          lang: "Sass",
          exp: lvl.e,
        },
        {
          icon: <SiBootstrap size={25} className="exp-icon" />,
          lang: "Bootstrap",
          exp: lvl.e,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          icon: <SiPython size={25} className="exp-icon" />,
          lang: "Python",
          exp: lvl.i,
        },
        {
          icon: <SiNodedotjs size={25} className="exp-icon" />,
          lang: "Node.js",
          exp: lvl.i,
        },
        {
          icon: <SiDelphi size={25} className="exp-icon" />,
          lang: "Delphi",
          exp: lvl.b,
        },
        {
          icon: <SiMongodb size={25} className="exp-icon" />,
          lang: "MongoDB",
          exp: lvl.i,
        },
        {
          icon: <SiMysql size={25} className="exp-icon" />,
          lang: "MySQL",
          exp: lvl.i,
        },
        {
          icon: <SiExpress size={25} className="exp-icon" />,
          lang: "Express.js",
          exp: lvl.i,
        },
      ],
    },
  ];

  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container exp-container">
        {cards.map((card, index) => {
          return (
            <div key={index} className="exp-card">
              <h3 className="exp-title">{card.title}</h3>
              <div className="exp-content">
                {card.skills.map((skill, index) => {
                  return (
                    <div key={index} className="exp-details">
                      {skill.icon}
                      <div>
                        <h4>{skill.lang}</h4>
                        <small className="text-light">{skill.exp}</small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
