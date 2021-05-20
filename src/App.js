import Navbar from "./componets/navbar";
import Home from "./componets/home";
import Main from "./componets/main";
import Footer from "./componets/footer";
import Projects from "./componets/projects";
import About from "./componets/about";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Main>
				<About />
				<Projects />
			</Main>
			<Footer />
		</>
	);
}

export default App;
