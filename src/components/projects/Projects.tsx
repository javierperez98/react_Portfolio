import PassGen from "../../assets/passGen.png";
import I18n from "../../assets/vuei18n.png";
import Email from "../../assets/email.png";
import Mayo from "../../assets/mayo.png";
import Weather from "../../assets/weather.png";
import "./projects.scss";

export const Projects = () => {
  const projects = [
    {
      title: "PassGen App",
      img: PassGen,
      text: "Password Generator desktop app created with Python 3 and PyQt 6 that creates a randomized secure password.",
    },
    {
      title: "Customer Invoice Portal",
      img: I18n,
      text: "Vue.js site with translation support to dynamically set the site's language using Vue i18n.",
    },
    {
      title: "Email Templete",
      img: Email,
      text: "Fully customizable and responsive email template for desktop and mobile, supported on all email clients.",
    },
    {
      title: "Mayo Clinic Guestpay",
      img: Mayo,
      text: "Customized Guest Pay portal site built with Vue.js tailored to Mayo Clinic's style and needs.",
    },
    {
      title: "Weather App",
      img: Weather,
      text: "Weather Forecast site that lets you search different cities and displays a detailed 5 day forcast.",
    },
  ];
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project-container">
        {projects.map((project, index) => {
          return (
            <div key={index} className="project-card">
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <div className="project-about">
                <small className="text-light">{project.text}</small>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
