import selfPic from "./images/self.png";
import arr from "../utils/icons";
import Title from "./title";

function About() {
	let i = 0;
	return (
		<section className="min-vh-100 py-5">
			<h1 className="text-warning text-center py-5">
				<Title>About Me/</Title>
			</h1>
			<div className="container row col-sm-12 col-md-9 m-auto px-0">
				<div className="col-md-6">
					<div className="row">
						<div className="col-8 col-lg-6 mx-auto mx-md-0 mb-3">
							<div className="about-img">
								<img
									src={selfPic}
									className="img-fluid rounded-circle border border-white"
									alt="Javier Perez"
								/>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="text-white">
								<p className=" text-warning">Name:</p>
								<p>Javier Perez</p>
								<p className=" text-warning">Profile:</p>
								<p>Full Stack Web Developer</p>
								<p className=" text-warning">Gmail:</p>
								<p>javier21perez98</p>
								<p className=" text-warning">GitHub:</p>
								<p>javierperez98</p>
							</div>
						</div>
					</div>
				</div>
				<div className="text-white text-center col-md-6">
					<h2 className="text-warning">Skills</h2>
					{arr.map((arr) => (
						<i key={(i += 1)} className={`${arr.icon} ${arr.color} p-1 fa-3x`}></i>
					))}
					<div className="about-me pt-4">
						<h5 className="text-warning">Background</h5>
						<p className="text-white text-left">
							My name is Javier and I'm from West Palm Beach, Florida and I live in San
							Diego, California. I'm a US Navy active duty military verteran. I love
							Technology and computers. Web Development is my passion and I want to
							make a career out of it. I always strive to be the best at what I do. I
							enjoy working on projects and apps and always aim for the best.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
