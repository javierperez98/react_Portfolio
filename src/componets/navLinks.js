import arr from "./utils/navLinks";

function NavLinks() {
	let i = 0;
	return (
		<div className="navbar-nav">
			{arr.map((arr) => (
				<a key={(i += 1)} className="nav-link text-white" href={arr.link}>
					{arr.text}
				</a>
			))}
		</div>
	);
}

export default NavLinks;
