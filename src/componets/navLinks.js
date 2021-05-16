function NavLinks() {
	const arr = [
		{ link: "#about-me", text: "About Me" },
		{ link: "#projects", text: "My Projects" },
		{ link: "#contact-me", text: "Contact Me" },
		{
			link:
				"https://docs.google.com/document/d/117FolzifuTavc4wU3poC1Vd4FT247TOQrqZZIYKNWm4/edit?usp=sharing",
			text: "My Resume",
		},
	];
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
