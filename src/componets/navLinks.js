import arr from "../utils/navLinks";
import Fade from "react-reveal/Fade";

function NavLinks() {
	let i = 0;
	return (
		<Fade top cascade>
			<div className="navbar-nav">
				{arr.map((arr) => (
					<a key={(i += 1)} className="nav-link text-white" href={arr.link}>
						{arr.text}
					</a>
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
		</Fade>
	);
}

export default NavLinks;
