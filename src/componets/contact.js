function Contact() {
	return (
		<div className="d-flex flex-row justify-content-around">
			<a className="text-info px-4" href="https://github.com/javierperez98">
				<i className="fab fa-github fa-2x"></i>
			</a>
			<a className="text-success px-4" href="mailto:javier21perez98@gmail.com">
				<i className="far fa-envelope fa-2x"></i>
			</a>
			<a
				className="text-primary px-4"
				href="https://www.linkedin.com/in/javier-perez98/"
			>
				<i className="fab fa-linkedin-in fa-2x"></i>
			</a>
		</div>
	);
}

export default Contact;
