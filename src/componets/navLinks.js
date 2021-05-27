import arr from "../utils/navLinks";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

function NavLinks() {
	let i = 0;
	return (
		<Fade top>
			<div className="navbar-nav">
				{arr.map((arr) => (
					<Link
						style={{ cursor: "pointer" }}
						spy={true}
						smooth={true}
						key={(i += 1)}
						className="nav-link text-white"
						target={arr.target}
						rel={arr.rel}
						to={arr.link}
					>
						{arr.text}
					</Link>
				))}
			</div>
		</Fade>
	);
}

export default NavLinks;
