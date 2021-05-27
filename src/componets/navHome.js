import { Link } from "react-scroll";

function NavHome() {
	return (
		<h2 className="nav-link m-0">
			<Link
				style={{ cursor: "pointer" }}
				className="nav-link p-0 text-white"
				to="home"
				spy={true}
				smooth={true}
			>
				Home
			</Link>
		</h2>
	);
}
export default NavHome;
