import user from "../../utils/index";
import Card from "./cards";
import Fade from "react-reveal/Fade";

function Projects() {
	return (
		<section className="projects-section bg-light" id="projects">
			<div className="container px-4 px-lg-5">
				<Fade bottom delay={500}>
					<h2 className="mb-4 text-center">
						<i className="fas fa-chevron-left" /> Projects /
						<i className="fas fa-chevron-right" />
					</h2>
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
								<p className="text-black-50 mb-3">{user.pro1.dis}</p>
								<p className="mb-3">{user.pro1.lang}</p>
								<div className="row d-flex justify-content-evenly col-9 mx-auto">
									<a
										href={user.pro1.link}
										target="__blank"
										type="button"
										className="btn btn-black col-5 p-1"
									>
										Site
									</a>
									<a
										href={user.pro1.repo}
										target="__blank"
										type="button"
										className="btn btn-black col-5 p-1"
									>
										Repo
									</a>
								</div>
							</div>
						</div>
					</Fade>
				</div>
				<Card
					pic1={user.pro2.pic}
					alt1={user.pro2.title}
					title1={user.pro2.title}
					link1={user.pro2.link}
					repo1={user.pro2.repo}
					dis1={user.pro2.dis}
					langs1={user.pro2.lang}
					pic2={user.pro3.pic}
					alt2={user.pro3.title}
					title2={user.pro3.title}
					dis2={user.pro3.dis}
					link2={user.pro3.link}
					repo2={user.pro3.repo}
					langs2={user.pro3.lang}
				/>
				<Card
					pic1={user.pro4.pic}
					alt1={user.pro4.title}
					title1={user.pro4.title}
					dis1={user.pro4.dis}
					link1={user.pro4.link}
					repo1={user.pro4.repo}
					langs1={user.pro4.lang}
					pic2={user.pro5.pic}
					alt2={user.pro5.title}
					title2={user.pro5.title}
					dis2={user.pro5.dis}
					link2={user.pro5.link}
					repo2={user.pro5.repo}
					langs2={user.pro5.lang}
				/>
			</div>
		</section>
	);
}

export default Projects;
