import Contacts from "./contact";
import Title from "./title";
import Fade from "react-reveal/Fade";

function Footer() {
	return (
		<div className="bg-gray">
			<Fade bottom cascade delay={300}>
				<footer className="d-flex flex-column py-5 align-items-center" id="contact">
					<h2 className="text-danger text-center mb-4">
						<Title>Contact Me/</Title>
					</h2>
					<Contacts />
					<h5 className="text-white text-center my-5">Javier Perez</h5>
					<p className="text-secondary">
						<i className="fa fa-copyright"></i> Copyright 2021
					</p>
					<p className="text-secondary text-center">
						All rights reserved. Powered by{" "}
						<span className="text-white">
							React.js<i className="p-1 fab fa-react text-react"></i>
						</span>
					</p>
				</footer>
			</Fade>
		</div>
	);
}

export default Footer;
