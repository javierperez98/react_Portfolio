import cacheApp from "./images/cacheapp.png";
import weatherPage from "./images/weatherPage.png";
import rocketTrades from "./images/rocket-trades.png";
import techBlog from "./images/techBlog.png";
import teamProfileGen from "./images/teamGen.png";

function Projects() {
	return (
		<section className="py-3 d-flex flex-column align-items-center" id="projects">
			<h1 className="text-primary text-center mb-3 pt-5">
				<i className="fas fa-chevron-left"></i>My Projects
				<i className="fas fa-chevron-right"></i>
			</h1>
			<a className="col-md-9 mb-4 p-0" href="https://cache-app-io.herokuapp.com/">
				<div className="card mx-3">
					<img src={cacheApp} alt="Cache App By: Javier Perez" className="p-1" />
				</div>
			</a>
			<a
				className="col-md-9 mb-4 p-0"
				href="https://javierperez98.github.io/weatherPage/"
			>
				<div className="card mx-3">
					<img
						src={weatherPage}
						alt="Weather Page App By: Javier Perez"
						className="p-1"
					/>
				</div>
			</a>
			<a
				className="col-md-9 mb-4 p-0"
				href="https://dancarrillo93.github.io/Rocket-Trades/"
			>
				<div className="card mx-3">
					<img
						src={rocketTrades}
						alt="Rocket Trades By: Javier Perez"
						className="p-1"
					/>
				</div>
			</a>
			<a className="col-md-9 mb-4 p-0" href="https://tech-blog-jp.herokuapp.com/">
				<div className="card mx-3">
					<img src={techBlog} alt="Tech Blog By: Javier Perez" className="p-1" />
				</div>
			</a>
			<a
				className="col-md-9 mb-4 p-0"
				href="https://github.com/javierperez98/teamProfileGen"
			>
				<div className="card mx-3">
					<img
						src={teamProfileGen}
						alt="Team Profile Maker By: Javier Perez"
						className="p-1"
					/>
				</div>
			</a>
		</section>
	);
}

export default Projects;
