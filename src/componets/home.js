import Fade from "react-reveal/Fade";
import Flash from "react-reveal/Flash";
import ParticlesBg from "particles-bg";

function Home() {
	return (
		<Fade bottom cascade delay={500}>
			<ParticlesBg color="ffffff" type="cobweb" bg={true} />
			<header
				className="vh-100 flex-column d-flex justify-content-center border border-white"
				id="home"
			>
				<h1 className="text-warning text-center my-3 mx-auto display-4">
					<i className="fas fa-chevron-left"></i>Hello!/
					<i className="fas fa-chevron-right"></i>
				</h1>
				<h2 className="text-primary text-center my-3 mx-auto">
					<i className="fas fa-code-branch"></i>I'm Full-Stack Web-Developer,
				</h2>
				<h2 className="text-danger text-center my-3 mx-auto">
					<Flash forever duration={2500}>
						<i className="fas fa-terminal"></i>
					</Flash>
					Javier Perez
				</h2>
			</header>
		</Fade>
	);
}

export default Home;
