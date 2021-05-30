import Project from "./projects";
import Navbar from "./navbar";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Footer from "./footer";
import Wrapper from "./wrapper";

function Portfolio() {
	return (
		<Wrapper>
			<Navbar />
			<Header />
			<About />
			<Project />
			<Contact />
			<Footer />
		</Wrapper>
	);
}

export default Portfolio;
