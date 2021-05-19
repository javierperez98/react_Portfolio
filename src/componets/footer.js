import Contacts from "./contact";
import Title from "./title";

function Footer() {
	return (
		<footer className="d-flex flex-column py-5 bg-gray align-items-center">
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
	);
}

export default Footer;
