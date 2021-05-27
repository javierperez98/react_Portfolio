import arr from "../utils/navLinks";
import Fade from "react-reveal/Fade";

function NavLinks() {
	let i = 0;
	return (
		<Fade top cascade>
			<div className="navbar-nav">
				{arr.map((arr) => (
					<a
						key={(i += 1)}
						className="nav-link text-white"
						target={arr.target}
						rel={arr.rel}
						href={arr.link}
					>
						{arr.text}
					</a>
				))}
			</div>
		</Fade>
	);
}

export default NavLinks;
