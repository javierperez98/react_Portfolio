import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./componets/navbar";
import Home from "./componets/home";
import Main from "./componets/main";
import Footer from "./componets/footer";
import Projects from "./componets/projects";
import About from "./componets/about";
import Resume from "./componets/resume";

function App() {
	return (
		<Router>
			<Navbar />
			<Route exact path="/">
				<Home />
			</Route>
			<Main>
				<Route exact path="/about">
					<About />
				</Route>
				<Route exact path="/projects">
					<Projects />
				</Route>
				<Route exact path="/resume">
					<Resume />
				</Route>
			</Main>
			<Footer />
		</Router>
	);
}

export default App;
