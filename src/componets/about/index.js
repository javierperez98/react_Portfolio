import user from "../../utils/index";
import icons from "../../utils/icons";
import Fade from "react-reveal/Fade";

function About() {
	let i = 0;
	let j = 0;
	let info = [
		{ title: "Name:", text: user.name },
		{ title: "Profile:", text: user.title },
		{ title: "Email:", text: user.email },
		{ title: "Github:", text: user.github.user },
	];

	return (
		<section className="about-section pb-5" id="about">
			<div className="container px-4 px-lg-5">
				<Fade bottom delay={500}>
					<div className="row gx-4 gx-lg-5 justify-content-center">
						<div className="col-lg-8">
							<h2 className="text-white mb-4 text-center">About Me</h2>
							<p className="text-white-50 mb-5">{user.bio}</p>
						</div>
					</div>
					<div className="row p-3">
						<div className="col-md-6 pb-5 text-center">
							<img
								className="img-fluid rounded-circle col-8 col-lg-6"
								src={user.pic}
								alt={user.name}
							/>
						</div>
						<div className="col-md-6 pb-5">
							{info.map((a) => (
								<div key={(j += 1)}>
									<p className="text-white mb-2 text-left">{a.title}</p>
									<p className="text-white-50 mb-3">{a.text}</p>
								</div>
							))}
						</div>
						<div className="col-12">
							<h2 className="text-white text-center">Skills</h2>
							<div className="text-center">
								{icons.map((icons) => (
									<i
										key={(i += 1)}
										className={`${icons.icon} ${icons.color} p-1 fa-4x`}
									></i>
								))}
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</section>
	);
}

export default About;
