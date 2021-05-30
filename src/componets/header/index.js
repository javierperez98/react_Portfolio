import user from "../../utils/index";
import Fade from "react-reveal/Fade";

function Header() {
	return (
		<header className="masthead">
			<div
				className="
          container
          px-4 px-lg-5
          d-flex
          h-100
          align-items-center
          justify-content-center
          "
			>
				<Fade bottom cascade delay={500}>
					<div className="d-flex justify-content-center">
						<div className="text-center">
							<h1 className="mx-auto my-0 text-uppercase">{user.name}</h1>
							<h2 className="text-white-50 mx-auto mt-2 mb-5">
								<i className="fas fa-chevron-left" /> {user.title}{" "}
								<i className="fas fa-chevron-right" />
							</h2>
							<a className="btn btn-light p-3 rounded-circle" href="#about">
								<i className="fas fa-chevron-down fa-3x"></i>
							</a>
						</div>
					</div>
				</Fade>
			</div>
		</header>
	);
}

export default Header;
