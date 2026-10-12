import React from "react";
import { RiContactsFill } from "react-icons/ri";
import "./contact.css";
import "../responsive.css";
import { TypeAnimation } from "react-type-animation";

function Contact() {
	return (
		<div>
			<div className="contactName">
				<RiContactsFill className="contactIcon" />
				<TypeAnimation
					sequence={["About_me", 10000]}
					wrapper="h1"
					className="profileName"
					cursor={true}
					repeat={0}
				/>
			</div>

			<div className="contactDec col-xs-8 col-sm-8 col-md-6 col-lg-6">
				I'm currently open to freelance opportunities, full-time roles, or
				collaborations on exciting projects. If you're looking for someone who
				can design, develop, and deliver, I'd love to chat
			</div>
			<div className="homeRight col-xs-10 col-sm-20 col-md-5 col-lg-5 col-xl-5">
				<div className="code-editor">
					<div className="code-content">
						<div className="code-line">
							<span className="line-number">1</span>
							<span>
								<span className="function">.social</span>{" "}
								<span className="symbol">=</span>{" "}
								<span className="keyword">()</span>{" "}
								<span className="symbol">=&gt;</span>{" "}
								<span className="symbol">{"{"}</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">2</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="keyword">email : </span>{" "}
								<span className="variable">yasin.araad@gmail.com</span>{" "}
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">3</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="property">'github'</span>
								<span className="symbol">:</span>{" "}
								<span className="string">
									'https://github.com/yourusername'
								</span>
								<span className="symbol">,</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">4</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="symbol">{"}"}</span>
								<span className="symbol">;</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
