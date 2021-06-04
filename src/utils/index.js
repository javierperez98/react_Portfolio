import pics from "./images/index";

const user = {
	name: "Javier Perez",
	pic: pics.Self,
	title: "Full-Stack Web-Developer",
	email: "javier21perez98@gmail.com",
	github: {
		user: "javierperez98",
		link: "https://github.com/javierperez98",
	},
	linkedin: {
		user: "javierperez98",
		link: "https://www.linkedin.com/in/javier-perez98",
	},
	resume:
		"https://docs.google.com/document/d/117FolzifuTavc4wU3poC1Vd4FT247TOQrqZZIYKNWm4/edit?usp=sharing",
	bio: "My name is Javier and I'm from West Palm Beach, Florida and I live in San Diego, California. I'm a US Navy active duty military verteran. I love Technology and computers. Web Development is my passion and I want to make a career out of it. I always strive to be the best at what I do. I enjoy working on projects and apps and always aim for the best.",
	pro1: {
		link: "https://cache-app-io.herokuapp.com/",
		repo: "https://github.com/UnDuhDuhSea/CacheApp",
		pic: pics.CacheApp,
		title: "Cache App",
		dis: "Budgeting made simplier! Track your expenses and budget.",
		lang: (
			<>
				<i className="fas fa-database text-secondary p-1 fa-2x" />
				<svg width="30" height="18" fill="#16BDCA">
					<path d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0zM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9z"></path>
				</svg>
				<i className="fab fa-js-square text-js p-1 fa-2x" />
			</>
		),
	},
	pro2: {
		link: "https://javierperez98.github.io/employee_directory/",
		repo: "https://github.com/javierperez98/employee_directory",
		pic: pics.EmployeeDirectory,
		title: "Employee Directory",
		dis: "Directory to search and sort a list of employees displaying their name, email, phone, picture and DOB.",
		lang: (
			<>
				<i className="fab fa-react text-react p-1 fa-2x" />
				<i className="fab fa-bootstrap text-bootstrap p-1 fa-2x" />
				<i className="fab fa-js-square text-js p-1 fa-2x" />
			</>
		),
	},
	pro3: {
		link: "https://fitness-tracker-app-jp.herokuapp.com",
		repo: "https://github.com/javierperez98/fitness_app",
		pic: pics.FitnessTracker,
		title: "Fitness Tracker",
		dis: "Track and manage your fitness goals! Input your workouts and excersies and track your totals!",
		lang: (
			<>
				<i className="fab fa-envira text-success p-1 fa-2x" />
				<i className="fab fa-node-js text-success p-1 fa-2x" />
				<i className="fab fa-js-square text-js p-1 fa-2x" />
			</>
		),
	},
	pro4: {
		link: "https://tech-blog-jp.herokuapp.com/",
		repo: "https://github.com/javierperez98/Tech_Blog",
		pic: pics.TechBlog,
		title: "TechBlog App",
		dis: "Sign up and post to the Blog site! You can create and view posts.",
		lang: (
			<>
				<i className="fas fa-database text-secondary p-1 fa-2x" />
				<i className="fab fa-node-js text-success p-1 fa-2x" />
				<i className="fab fa-js-square text-js p-1 fa-2x" />
			</>
		),
	},
	pro5: {
		link: "https://javierperez98.github.io/weatherPage/",
		repo: "https://github.com/javierperez98/weatherPage",
		pic: pics.WeatherPage,
		title: "WeatherPage App",
		dis: "Weather forecast App that lets you search any city!",
		lang: (
			<>
				<i className="fab fa-html5 text-danger p-1 fa-2x" />
				<i className="fab fa-bootstrap text-bootstrap p-1 fa-2x" />
				<i className="fab fa-js-square text-js p-1 fa-2x" />
			</>
		),
	},
};

export default user;
