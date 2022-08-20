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
          icon: <SiTypescript className="exp-icon" />,
          lang: "Typescript",
          exp: lvl.e,
        },
        {
          icon: <SiVuedotjs className="exp-icon" />,
          lang: "Vue.js",
          exp: lvl.e,
        },
        {
          icon: <SiReact className="exp-icon" />,
          lang: "React,js",
          exp: lvl.i,
        },
        {
          icon: <SiJavascript className="exp-icon" />,
          lang: "Javascript",
          exp: lvl.e,
        },
        {
          icon: <SiSass className="exp-icon" />,
          lang: "Sass",
          exp: lvl.e,
        },
        {
          icon: <SiBootstrap className="exp-icon" />,
          lang: "Bootstrap",
          exp: lvl.e,
        },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          icon: <SiPython className="exp-icon" />,
          lang: "Python",
          exp: lvl.i,
        },
        {
          icon: <SiNodedotjs className="exp-icon" />,
          lang: "Node.js",
          exp: lvl.i,
        },
        {
          icon: <SiDelphi className="exp-icon" />,
          lang: "Delphi",
          exp: lvl.b,
        },
        {
          icon: <SiMongodb className="exp-icon" />,
          lang: "MongoDB",
          exp: lvl.i,
        },
        {
          icon: <SiMysql className="exp-icon" />,
          lang: "MySQL",
          exp: lvl.i,
        },
        {
          icon: <SiExpress className="exp-icon" />,
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
      <div className="con exp-con">
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
