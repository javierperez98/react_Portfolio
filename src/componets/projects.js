import arr from "../utils/projects.js";
import Title from "./title";

function Projects() {
	let i = 0;
	return (
		<section className="min-vh-100 py-5 d-flex flex-column align-items-center">
			<h1 className="text-primary text-center mb-3 py-5">
				<Title>Projects/</Title>
			</h1>
			<div
				id="carouselProjects"
				className="carousel slide bg-custom col-xl-6 col-lg-8 col-md-9 col-sm-10 col-12"
				data-ride="carousel"
			>
				<ol className="carousel-indicators bg-custom m-0">
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
							<div className="text-center text-white">
								<p>{arr.dis}</p>
							</div>
							<a href={arr.link} target="_blank" rel="noopener noreferrer">
								<img
									src={arr.pic}
									className="w-100 custom-img"
									alt={`${arr.name} By: Javier Perez`}
								/>
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
						<div className="bg-custom p-2 rounded-circle">
							<span
								className={`carousel-control-${pv}-icon`}
								aria-hidden="true"
							></span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

export default Projects;
