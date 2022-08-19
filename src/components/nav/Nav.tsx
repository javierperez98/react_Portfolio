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
    { id: "#root", icon: <AiOutlineHome size={20} /> },
    { id: "#about", icon: <AiOutlineUser size={20} /> },
    { id: "#experience", icon: <AiOutlineProfile size={20} /> },
    { id: "#projects", icon: <MdWorkOutline size={20} /> },
    { id: "#contact", icon: <AiOutlineContacts size={20} /> },
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
