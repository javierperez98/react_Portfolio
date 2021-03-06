import Fade from "react-reveal/Fade";

function Card({
	pic1,
	alt1,
	title1,
	link1,
	repo1,
	dis1,
	langs1,
	pic2,
	alt2,
	title2,
	link2,
	repo2,
	dis2,
	langs2,
}) {
	return (
		<>
			<Fade right delay={500}>
				<div className="row gx-0 mb-lg-0 justify-content-center mb-lg-0 mb-5">
					<div className="col-lg-6">
						<img className="img-fluid custom-border" src={pic1} alt={alt1} />
					</div>
					<div className="col-lg-6">
						<div className="bg-black text-center h-100 project">
							<div className="d-flex h-100">
								<div className="project-text w-100 my-auto text-center text-lg-left">
									<h4 className="text-white">{title1}</h4>
									<p className="mb-0 text-white-50">{dis1}</p>
									<p className="my-3">{langs1}</p>
									<div className="row d-flex justify-content-evenly col-9 mx-auto">
										<a
											href={link1}
											target="__blank"
											type="button"
											className="btn btn-light col-5 p-1"
										>
											Site
										</a>
										<a
											href={repo1}
											target="__blank"
											type="button"
											className="btn btn-light col-5 p-1"
										>
											Repo
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
			<Fade left delay={500}>
				<div className="row gx-0 justify-content-center mb-lg-0 mb-5">
					<div className="col-lg-6">
						<img className="img-fluid custom-border" src={pic2} alt={alt2} />
					</div>
					<div className="col-lg-6 order-lg-first">
						<div className="bg-black text-center h-100 project">
							<div className="d-flex h-100">
								<div className="project-text w-100 my-auto text-center text-lg-right">
									<h4 className="text-white">{title2}</h4>
									<p className="mb-0 text-white-50">{dis2}</p>
									<p className="my-3">{langs2}</p>
									<div className="row d-flex justify-content-evenly col-9 mx-auto">
										<a
											href={link2}
											target="__blank"
											type="button"
											className="btn btn-light col-5 p-1"
										>
											Site
										</a>
										<a
											href={repo2}
											target="__blank"
											type="button"
											className="btn btn-light col-5 p-1"
										>
											Repo
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fade>
		</>
	);
}
export default Card;
