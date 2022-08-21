import "./contact.scss";
import { BsEnvelopeFill, BsLinkedin, BsGithub } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const options = [
    {
      icon: <BsEnvelopeFill className="contact-option-icon" />,
      title: "Email",
      text: "javier21perez98@gmail.com",
      linkUrl: "mailto:javier21perez98@gmail.com",
      linkText: "Send an email",
    },
    {
      icon: <BsLinkedin className="contact-option-icon" />,
      title: "LinkedIn",
      text: "javier-perez98",
      linkUrl: "https://www.linkedin.com/in/javier-perez98/",
      linkText: "Lets Connect",
    },
    {
      icon: <BsGithub className="contact-option-icon" />,
      title: "Email",
      text: "javierperez98",
      linkUrl: "https://github.com/javierperez98",
      linkText: "Go Follow me",
    },
  ];

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fc = form.current;
    if (!fc) return;
    const obj = {
      fullName: fc.fullName.value,
      email: fc.email.value,
      message: fc.message.value,
    };
    const res = await emailjs.send(
      "service_aagbziy",
      "template_9nj8p5m",
      obj,
      "0A7dIhL8ZVSGm4wm-"
    );
    try {
      console.log(res.status, res.text);
      form.current.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="con contact-con">
        <div className="contact-options">
          {options.map((option, index) => {
            return (
              <div key={index} className="contact-option">
                {option.icon}
                <h4>{option.title}</h4>
                <h5>{option.text}</h5>
                <a href={option.linkUrl} target={"_blank"} rel="noreferrer">
                  {option.linkText}
                </a>
              </div>
            );
          })}
        </div>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input
            className="contact-name"
            type="text"
            name="fullName"
            placeholder="Your Full name"
            required
          />
          <input
            className="contact-email"
            type="email"
            name="email"
            placeholder="Your Email address"
            required
          />
          <textarea
            className="contact-message"
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-prime">
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
};
