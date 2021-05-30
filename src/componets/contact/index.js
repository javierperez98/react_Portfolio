import user from "../../utils/index";
import Fade from "react-reveal/Fade";

function Contact() {
	let i = 0;
	let con = [
		{
			title: "LinkedIn",
			link: user.linkedin.link,
			text: user.linkedin.user,
			icon: "fab fa-linkedin-in",
		},
		{
			title: "GitHub",
			link: user.github.link,
			text: user.github.user,
			icon: "fa fa-github",
		},
		{
			title: "Email",
			link: user.email,
			text: user.email,
			icon: "fas fa-envelope",
		},
	];

	return (
		<section id="signup" className="contact-section bg-black">
			<div className="container px-4 px-lg-5">
				<div className="row gx-4 gx-lg-5 d-flex justify-content-center pb-5">
					{con.map((a) => {
						return (
							<div key={(i += 1)} className="col-md-4 mb-3 mb-md-0">
								<Fade bottom delay={500}>
									<div className="card py-4 h-100">
										<div className="card-body text-center">
											<i className={`${a.icon} mb-2 fa-2x`} />
											<h4 className="text-uppercase m-0">{a.title}</h4>
											<hr className="my-4 mx-auto" />
											<div className="small text-black-50">
												<a className="mx-2" href={a.link} target="__blank">
													{a.text}
												</a>
											</div>
										</div>
									</div>
								</Fade>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Contact;
