import arr from "../utils/projects.js";

function Projects() {
	let i = 0;
	return (
		<section className="py-5 d-flex flex-column align-items-center" id="projects">
			<h1 className="text-primary text-center mb-3 py-5">
				<i className="fas fa-chevron-left"></i>My Projects
				<i className="fas fa-chevron-right"></i>
			</h1>
			{arr.map((arr) => (
				<a key={(i += 1)} className="col-md-9 mb-4 p-0" href={arr.link}>
					<div className="card mx-3">
						<img src={arr.pic} alt={arr.name + "By: Javier Perez"} className="p-1" />
					</div>
				</a>
			))}
		</section>
	);
}

export default Projects;
