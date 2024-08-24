import "./experience.scss";
import {
  SiTypescript,
  SiVuedotjs,
  SiReact,
  SiJavascript,
  SiFlutter,
  SiSvelte,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiDelphi,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFirebase,
  SiMicrosoftsqlserver
} from "react-icons/si";

export const Experience = () => {
  enum lvl {
    e = "Experienced",
    i = "Intermediate"
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
          icon: <SiBootstrap className="exp-icon" />,
          lang: "Bootstrap",
          exp: lvl.e,
        },
        {
          icon: <SiJavascript className="exp-icon" />,
          lang: "Javascript",
          exp: lvl.e,
        },
        {
          icon: <SiReact className="exp-icon" />,
          lang: "React,js",
          exp: lvl.i,
        },
        {
          icon: <SiFlutter className="exp-icon" />,
          lang: "Flutter",
          exp: lvl.i,
        },
        {
          icon: <SiSvelte className="exp-icon" />,
          lang: "Svelte",
          exp: lvl.i,
        },
        {
          icon: <SiTailwindcss className="exp-icon" />,
          lang: "Tailwind",
          exp: lvl.i,
        }
      ],
    },
    {
      title: "Backend Development",
      skills: [
        {
          icon: <SiDelphi className="exp-icon" />,
          lang: "Delphi",
          exp: lvl.e,
        },
        {
          icon: <SiMicrosoftsqlserver className="exp-icon" />,
          lang: "Microsoft SQL",
          exp: lvl.e,
        },
        {
          icon: <SiFirebase className="exp-icon" />,
          lang: "FireBase",
          exp: lvl.i,
        },
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
        }
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
