import "./nav.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
  AiOutlineProfile,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { useState } from "react";

export const Nav = () => {
  const [active, setActive] = useState("#root");
  const links = [
    { id: "#root", icon: <AiOutlineHome className="nav-icon" /> },
    { id: "#about", icon: <AiOutlineUser className="nav-icon" /> },
    { id: "#experience", icon: <AiOutlineProfile className="nav-icon" /> },
    { id: "#projects", icon: <MdWorkOutline className="nav-icon" /> },
    { id: "#contact", icon: <AiOutlineContacts className="nav-icon" /> },
  ];
  return (
    <nav>
      {links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.id}
            onClick={() => setActive(link.id)}
            className={active === link.id ? "active" : ""}
          >
            {link.icon}
          </a>
        );
      })}
    </nav>
  );
};
