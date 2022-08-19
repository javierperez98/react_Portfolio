import "./header.scss";
import self from "../../assets/me.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Javier Perez</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <div className="buttons">
          <a
            href="https://docs.google.com/document/d/1Q4U18W-ze-NMmtTf3Tbu5xJOcT4wVGCaUKCcCWarzq0/edit?usp=sharing"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Resume
          </a>
          <a href="#contact" className="btn btn-prime">
            Contact me
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/javier-perez98"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/javierperez98"
            target={"_blank"}
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div className="self-img">
          <img src={self} alt="self" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
