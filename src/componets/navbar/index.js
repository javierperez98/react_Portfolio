import React, { useState } from "react";
import user from "../../utils/index";
import Fade from "react-reveal/Fade";
import Links from "./links";
const navWhite = "navbar-shrink";
const navClear = "navbar-light ";

function Navbar() {
	const [nav, setNav] = useState(navClear);

	window.onscroll = () => {
		if (window.pageYOffset > 150) {
			return setNav(navWhite);
		}
		setNav(navClear);
	};

	return (
		<nav className={`navbar navbar-expand-lg fixed-top ${nav}`} id="mainNav">
			<div className="container px-4 px-lg-5">
				<Fade top delay={500}>
					<a className="navbar-brand" href="#page-top">
						Home
					</a>
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						Menu <i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav ms-auto">
							<Links text="About" link="#about" />
							<Links text="Projects" link="#projects" />
							<Links text="Contact" link="#signup" />
							<Links text="Resume" link={user.resume} tar="__blank" />
						</ul>
					</div>
				</Fade>
			</div>
		</nav>
	);
}

export default Navbar;
