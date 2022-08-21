import "./footer.scss";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="footer">
      <a href="#root" className="footer-logo">
        Javier Perez
      </a>
      <ul className="footer-links">
        <li>
          <a href="#root">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://www.linkedin.com/in/javier-perez98/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/javierperez98">
          <BsGithub />
        </a>
        <a href="https://twitter.com/Eniqma21">
          <BsTwitter />
        </a>
      </div>
      <div className="footer-cr">
        <small>&copy; Javier Perez. All rights reserved.</small>
      </div>
    </footer>
  );
};
