import React from "react";
import profileImage from "../image/profile.png";
import "./about.css";
import "../responsive.css";
import { TypeAnimation } from "react-type-animation";

function About() {
	return (
		<div>
			<img src={profileImage} alt="" className="profileImage" />
			<TypeAnimation
				sequence={["About_me", 10000]}
				wrapper="h1"
				className="profileName"
				cursor={true}
				repeat={0}
			/>

			<div className="profileDec col-xs-11 col-sm-11 col-md-10 col-lg-10">
				Hello, I’m <strong className="profileT">Yasin Araad</strong> from
				Afghanistan, a passionate{" "}
				<strong>Full-Stack Web & Mobile Developer</strong> and{" "}
				<strong>UX/UI & Graphic Designer</strong> with over{" "}
				<strong>+1 year of experience</strong> building powerful, user-friendly
				digital solutions. I hold a{" "}
				<strong>Bachelor’s degree in Software Engineering</strong> and have a
				strong passion for creating modern, responsive, and intuitive digital
				experiences. I am fluent in <strong>Persian and English</strong> and
				continuously work on improving my skills and exploring new technologies.
			</div>
		</div>
	);
}

export default About;
