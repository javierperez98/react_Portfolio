import React from "react";
import NavLinks from "./navLinks";
import NavHome from "./navHome";
import Fade from "react-reveal/Fade";

function Navbar() {
	return (
		<Fade top>
			<nav className="navbar navbar-expand-sm d-flex navbar-dark bg-custom justify-content-between custom-navbar fixed-top p-2 border-bottom border-white">
				<NavHome />
				<NavLinks />
			</nav>
			<nav className="fixed-top mobile-navbar">
				<div className="navbar navbar-dark bg-custom d-flex align-items-center p-3">
					<NavHome />
					<button
						className="navbar-toggler p-0"
						type="button"
						data-toggle="collapse"
						data-target="#navbarToggleExternalContent"
						aria-controls="navbarToggleExternalContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fas fa-bars text-white"></i>
					</button>
				</div>
				<div className="collapse" id="navbarToggleExternalContent">
					<div className="d-flex flex-column align-items-end">
						<div className="navbar-dark bg-custom p-2 d-flex flex-column align-items-end w-auto">
							<NavLinks />
						</div>
					</div>
				</div>
			</nav>
		</Fade>
	);
}

export default Navbar;
