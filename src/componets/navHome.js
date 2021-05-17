import { NavLink } from "react-router-dom";

function NavHome() {
	return (
		<h2 className="nav-link m-0">
			<NavLink className="nav-link p-0 text-white" to="/">
				Home
			</NavLink>
		</h2>
	);
}
export default NavHome;
