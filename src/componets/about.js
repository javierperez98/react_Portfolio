function About() {
	return (
		<section className="py-3" id="about-me">
			<h1 className="text-warning text-center py-5">
				<i className="fas fa-chevron-left"></i>About Me
				<i className="fas fa-chevron-right"></i>
			</h1>
			<div className="container col-md-9">
				<div className="row">
					<div className="col-sm-12">
						<div className="row">
							<div className="col-md-6">
								<div className="row">
									<div className="col-sm-6 col-md-5">
										<div className="about-img">
											<img
												src=""
												className="img-fluid rounded-circle border border-white"
												alt="Javier Perez"
											/>
										</div>
									</div>
									<div className="col-sm-6 col-md-7">
										<div className="text-white">
											<p className="text-warning">Name:</p>
											<p>Javier Perez</p>
											<p className="text-warning">Profile:</p>
											<p>Full Stack Web Developer</p>
											<p className="text-warning">Gmail:</p>
											<p>javier21perez98</p>
											<p className="text-warning">GitHub:</p>
											<p>javierperez98</p>
										</div>
									</div>
								</div>
								<div className="text-white text-center">
									<h2 className="text-warning">Skills</h2>
									<i className="fab fa-html5 fa-2x text-danger"></i>
									<i className="fab fa-css3-alt fa-2x text-primary"></i>
									<i className="fab fa-js-square fa-2x text-js"></i>
									<i className="fab fa-react fa-2x text-react"></i>
									<i className="fab fa-node-js fa-2x text-success"></i>
									<i className="fab fa-npm fa-2x text-white"></i>
									<i className="fab fa-bootstrap fa-2x text-bootstrap"></i>
									<i className="fab fa-git-square fa-2x text-git"></i>
									<i className="fab fa-gitlab fa-2x text-gitlab"></i>
									<i className="fab fa-github fa-2x text-github"></i>
									<i className="fas fa-database fa-2x text-secondary"></i>
									<i className="fas fa-server fa-2x text-white"></i>
								</div>
							</div>
							<div className="col-md-6">
								<div className="about-me pt-4 pt-md-0">
									<h5 className="text-warning">Background</h5>
									<p className="text-white">
										My name is Javier and I'm from West Palm Beach, Florida and I live in
										San Diego, California. I'm a US Navy active duty military verteran. I
										love Technology and computers. Web Development is my passion and I
										want to make a career out of it. I always strive to be the best at
										what I do. I enjoy working on projects and apps and always aim for the
										best.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
