import user from "../../utils/index";
import Card from "./cards";
import Fade from "react-reveal/Fade";

function Projects() {
	return (
		<section className="projects-section bg-light" id="projects">
			<div className="container px-4 px-lg-5">
				<Fade bottom delay={500}>
					<h2 className="mb-4 text-center">Projects</h2>
				</Fade>
				<div className="row gx-0 mb-4 mb-lg-5 align-items-center">
					<Fade left delay={500}>
						<div className="col-xl-8 col-lg-7">
							<img
								className="img-fluid mb-3 mb-lg-0"
								src={user.pro1.pic}
								alt={user.pro1.title}
							/>
						</div>
						<div className="col-xl-4 col-lg-5">
							<div className="featured-text text-center text-lg-left">
								<h4>{user.pro1.title}</h4>
								<p className="text-black-50 mb-0">{user.pro1.dis}</p>
							</div>
						</div>
					</Fade>
				</div>
				<Card
					pic1={user.pro2.pic}
					alt1={user.pro2.title}
					title1={user.pro2.title}
					dis1={user.pro2.dis}
					pic2={user.pro3.pic}
					alt2={user.pro3.title}
					title2={user.pro3.title}
					dis2={user.pro3.dis}
				/>
				<Card
					pic1={user.pro4.pic}
					alt1={user.pro4.title}
					title1={user.pro4.title}
					dis1={user.pro4.dis}
					pic2={user.pro5.pic}
					alt2={user.pro5.title}
					title2={user.pro5.title}
					dis2={user.pro5.dis}
				/>
			</div>
		</section>
	);
}

export default Projects;
