import React from "react";
import "./Home.css";
import "../responsive.css";

function Home() {
	return (
		<div className="home col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
			<div className="homeLeft col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
				{/* left side */}
				<p className="hi">🚀 Hi I'm</p>
				<h1 className="yasin">Yasin Araad</h1>
				<p className="intro-line">Frontend developer</p>
				<p className="intro-line">UX & Graphic Designer</p>
				<p className="intro-line">🎯 Let’s build something amazing together!</p>

				<div>
					<span className="orangeConst">const</span>{" "}
					<span className="var">Github = </span>{" "}
					<a
						href="https://github.com/araad17"
						target="_blank"
						rel="noopener noreferrer"
					>
						"https://github.com/araad17"
					</a>
				</div>

				<div>
					<span className="orangeConst">const</span>{" "}
					<span className="var">e-mail</span>{" "}
					<a href="mailto:yasin.araad@gmail.com">"yasin.araad@gmail.com"</a>
				</div>
			</div>

			{/* right side */}
			<div className="homeRight col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
				<div className="code-editor">
					<div className="code-content">
						<div className="code-line">
							<span className="line-number">1</span>
							<span>
								<span className="keyword">const</span>{" "}
								<span className="function">HomePage</span>{" "}
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
								<span className="keyword">const</span>{" "}
								<span className="variable">userInfo</span>{" "}
								<span className="symbol">=</span>{" "}
								<span className="symbol">{"{"}</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">3</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="property">username</span>
								<span className="symbol">:</span>{" "}
								<span className="string">'Yasin Arad'</span>
								<span className="symbol">,</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">4</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="property">profession</span>
								<span className="symbol">:</span>{" "}
								<span className="string">'Software Engineer'</span>
								<span className="symbol">,</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">5</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="property">hobby</span>
								<span className="symbol">:</span>{" "}
								<span className="string">'Creating innovative solutions'</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">6</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="symbol">{"}"}</span>
								<span className="symbol">;</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">7</span>
						</div>

						<div className="code-line">
							<span className="line-number">8</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="function">useEffect</span>
								<span className="symbol">(() =&gt; {"{"}</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">9</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="variable">document</span>
								<span className="symbol">.</span>
								<span className="property">title</span>
								<span className="symbol"> = </span>
								<span className="string">"Profile"</span>
								<span className="symbol">;</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">10</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="symbol">{"}"}</span>
								<span className="symbol">, []);</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">11</span>
						</div>

						<div className="code-line">
							<span className="line-number">12</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="keyword">return</span>{" "}
								<span className="symbol">(</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">13</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="tag">&lt;section</span>{" "}
								<span className="property">className</span>
								<span className="symbol">=</span>
								<span className="string">"profile-container"</span>
								<span className="tag">&gt;</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">14</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="tag">&lt;h1&gt;</span>
								<span className="symbol">{"{"}</span>
								<span className="variable">userInfo.username</span>
								<span className="symbol">{"}"}</span>
								<span className="tag">&lt;/h1&gt;</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">15</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="tag">&lt;p&gt;</span>
								<span className="symbol">{"{"}</span>
								<span className="variable">userInfo.profession</span>
								<span className="symbol">{"}"}</span>
								<span className="tag">&lt;/p&gt;</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">16</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="tag">&lt;/section&gt;</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">17</span>
							<span>
								&nbsp;&nbsp;&nbsp;&nbsp;
								<span className="symbol">);</span>
							</span>
						</div>

						<div className="code-line">
							<span className="line-number">18</span>
							<span>
								<span className="symbol">{"}"}</span>
								<span className="symbol">;</span>
							</span>
						</div>
					</div>

					<div className="cursor-dot"></div>

					<div className="scroll-up">▲</div>
					<div className="scroll-down">▼</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
