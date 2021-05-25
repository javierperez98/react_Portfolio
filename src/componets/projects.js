import arr from "../utils/projects.js";
import Title from "./title";
import Fade from "react-reveal/Fade";

function Projects() {
	let i = 0;
	return (
		<Fade bottom cascade delay={500}>
			<section
				className="min-vh-100 py-5 d-flex flex-column align-items-center"
				id="projects"
			>
				<h1 className="text-primary text-center mb-3 py-5">
					<Title>Projects/</Title>
				</h1>
				<div className="col-sm-10 col-12 row row-cols-1 row-cols-lg-2">
					{arr.map((arr) => (
						<div key={i++} className="card bg-custom p-md-3 py-2">
							<a href={arr.link} target="_blank" rel="noopener noreferrer">
								<img
									src={arr.pic}
									className="card-img w-100 custom-img"
									alt={`${arr.name} By: Javier Perez`}
								/>
							</a>
							<div className="card-img-overlay d-flex flex-column justify-content-end align-items-center">
								<a
									className="text-decoration-none text-white"
									href={arr.repo}
									target="_blank"
									rel="noopener noreferrer"
								>
									<h5>{`Repo: ${arr.name}`}</h5>
									<p>{arr.dis}</p>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</Fade>
	);
}

export default Projects;
