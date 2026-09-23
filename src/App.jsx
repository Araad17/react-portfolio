import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";

import { useState } from "react";
import "./App.css";
import "./index.css";
import "./responsive.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<BrowserRouter>
			<section id="center" className=" col-xs-11 col-sm-11 col-md-10 col-lg-10">
				<div className="hero ">
					<div className="leftHeader">
						<NavLink to="/">img</NavLink>
					</div>

					<div className="centerHeader">
						<div className="index">
							<NavLink to="/">_index</NavLink>
						</div>
						<div className="about">
							<NavLink to="/about">_about</NavLink>
						</div>
						<div className="project">
							<NavLink to="/project">_Project</NavLink>
						</div>
					</div>

					<div className="rightHeader">
						<NavLink to="contact">_contact_me</NavLink>
					</div>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/project" element={<Project />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</section>
		</BrowserRouter>
	);
}

export default App;
