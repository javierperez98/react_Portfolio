import Fade from "react-reveal/Fade";

function Contact() {
	return (
		<Fade bottom delay={500}>
			<div className="d-flex flex-row justify-content-around">
				<a
					className="text-info px-4"
					href="https://github.com/javierperez98"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-github fa-2x"></i>
				</a>
				<a
					className="text-success px-4"
					href="mailto:javier21perez98@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="far fa-envelope fa-2x"></i>
				</a>
				<a
					className="text-primary px-4"
					href="https://www.linkedin.com/in/javier-perez98/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<i className="fab fa-linkedin-in fa-2x"></i>
				</a>
			</div>
		</Fade>
	);
}

export default Contact;
