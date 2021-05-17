import Contacts from "./contact";

function Footer() {
	return (
		<footer className="d-flex flex-column py-3 bg-gray">
			<h4 id="contact-me" className="text-danger text-center">
				<i className="fas fa-chevron-left"></i>Contact Me
				<i className="fas fa-chevron-right"></i>
			</h4>
			<Contacts />
		</footer>
	);
}

export default Footer;
