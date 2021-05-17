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
			<Route exact path="/react_Portfolio">
				<Home to="/" />
			</Route>
			<Main>
				<Route exact path="/about">
					<About to="/about" />
				</Route>
				<Route exact path="/projects">
					<Projects to="/projects" />
				</Route>
				<Route exact path="/resume">
					<Resume to="/resume" />
				</Route>
			</Main>
			<Footer />
		</Router>
	);
}

export default App;
