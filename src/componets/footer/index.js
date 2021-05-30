import Fade from "react-reveal/Fade";

function Footer() {
	return (
		<footer className="footer bg-black small text-center text-white-50">
			<Fade bottom delay={500}>
				<div className="container px-4 px-lg-5">
					Copyright &copy; 2021 All rights reserved. Powered by React.js
					<i className="p-1 fab fa-react text-react"></i>
				</div>
			</Fade>
		</footer>
	);
}

export default Footer;
