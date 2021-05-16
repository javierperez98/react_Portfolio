function Home() {
	return (
		<header
			className="
			vh-100
			bg-custom
			d-flex
			flex-column
			align-items-center
			justify-content-center
		"
			id="home"
		>
			<h1 className="text-warning my-3">
				<i className="fas fa-chevron-left"></i>Hello!/
				<i className="fas fa-chevron-right"></i>
			</h1>
			<h2 className="text-primary text-center my-3">
				<i className="fas fa-code-branch"></i>I'm Full-Stack Web-Developer,
			</h2>
			<h2 className="text-danger text-center my-3">
				<i className="fas fa-terminal"></i>Javier Perez
			</h2>
		</header>
	);
}

export default Home;
