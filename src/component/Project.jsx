import React from "react";
import "./project.css";
import "../responsive.css";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";

function Project() {
	return (
		<div>
			<HiMiniCodeBracket className="project-icon" />

			<TypeAnimation
				sequence={["Projects", 10000]}
				wrapper="h1"
				className="profileName"
				cursor={true}
				repeat={0}
			/>
			<p className="projectDec">All projects will be listed here.</p>
		</div>
	);
}

export default Project;
