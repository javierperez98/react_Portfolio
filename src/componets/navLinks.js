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
			<a
				className="nav-link text-white"
				href="https://docs.google.com/document/d/117FolzifuTavc4wU3poC1Vd4FT247TOQrqZZIYKNWm4/edit?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
			>
				My Resume
			</a>
		</div>
	);
}

export default NavLinks;
