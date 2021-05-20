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
				<div
					id="carouselProjects"
					className="carousel slide bg-custom col-xl-6 col-lg-8 col-md-9 col-sm-10 col-12"
					data-ride="carousel"
				>
					<ol className="carousel-indicators">
						<li
							data-target="#carouselProjects"
							data-slide-to="0"
							className="active"
						></li>
						{[1, 2, 3, 4, 5].map((num) => (
							<li key={num} data-target="#carouselProjects" data-slide-to={num}></li>
						))}
					</ol>
					<div className="carousel-inner">
						{arr.map((arr) => (
							<div key={i++} className={`carousel-item ${arr.active}`}>
								<a href={arr.link} target="_blank" rel="noopener noreferrer">
									<img
										src={arr.pic}
										className="w-100 custom-img"
										alt={`${arr.name} By: Javier Perez`}
									/>

									<div class="carousel-caption d-none d-block">
										<a
											className="text-decoration-none text-white"
											href={arr.repo}
											target="_blank"
											rel="noopener noreferrer"
										>
											<h5>{`Repo: ${arr.name}`}</h5>
										</a>
										<p>{arr.dis}</p>
									</div>
								</a>
							</div>
						))}
					</div>
					{["prev", "next"].map((pv) => (
						<a
							key={pv}
							className={`carousel-control-${pv} mx-3`}
							href="#carouselProjects"
							role="button"
							data-slide={pv}
						>
							<span
								className={`carousel-control-${pv}-icon`}
								aria-hidden="true"
							></span>
						</a>
					))}
				</div>
			</section>
		</Fade>
	);
}

export default Projects;
