import arr from "../utils/navLinks";
import { NavLink } from "react-router-dom";

function NavLinks() {
	let i = 0;
	return (
		<div className="navbar-nav">
			{arr.map((arr) => (
				<NavLink key={(i += 1)} className="nav-link text-white" to={arr.link}>
					{arr.text}
				</NavLink>
			))}
			<a className="nav-link text-white" href="#contact-me">
				Contact Me
			</a>
		</div>
	);
}

export default NavLinks;
