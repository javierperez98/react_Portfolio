function Contact() {
	return (
		<div className="d-flex justify-content-around">
			<a className="text-info" href="https://github.com/javierperez98">
				<i className="fab fa-github fa-2x"></i>
			</a>
			<a className="text-success" href="mailto:javier21perez98@gmail.com">
				<i className="far fa-envelope fa-2x"></i>
			</a>
			<a
				className="text-primary"
				href="https://www.linkedin.com/in/javier-perez98/"
			>
				<i className="fab fa-linkedin-in fa-2x"></i>
			</a>
			<span className="text-warning">
				<i className="fa fa-copyright fa-2x"></i>
			</span>
		</div>
	);
}

export default Contact;
