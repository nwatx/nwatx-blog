import NavBarLayout from "../layouts/NavBarLayout";
import Head from "next/head";
import ViewCounter from "../components/ViewCounter";
// import ProjectCard from "../components/ProjectCard";
import Card from "../components/Card";
import Link from "next/link";

export default function Home() {
	return (
		<NavBarLayout>
			<Head>
				<title>Neo Wang - Blog</title>
				<meta
					name="description"
					content="Neo Wang's blog - code, ping pong, and more!"
				/>
				<meta
					name="keywords"
					content="nwatx, Neo Wang, Next.js, Next.js blog"
				/>
			</Head>
			<div className="flex h-full scrollbar-thin overflow-auto scrollbar-thumb-rounded w-full flex-col max-w-3xl">
				{/* about me section */}
				<div className="flex flex-col md:flex-row w-full">
					<div className="flex flex-col w-full py-3 justify-center relative">
						{/* TODO: add image of myself later */}
						{/* <h1 className="text-4xl my-3 font-extrabold">Neo Wang</h1> */}
						{/* <div className="w-full mt-4 border-b dark:border-gray-500" /> */}
						<div className="flex flex-row">
							<div className="prose max-w-full w-full">
								<p>
									Hi! I'm a{" "}
									<Link href="https://www.cs.utexas.edu/turing-scholars">
										Turing Scholar
									</Link>{" "}
									at UT Austin studying Computer Science and Mathematics.
								</p>
								<p>
									I'm deeply passionate about <i>efficiency</i>, and I hope to
									allow computers to run new things faster and with more
									reliability. I am interested in machine learning, statistics,
									and robotics.
								</p>
								<p>
									I've previously interned at{" "}
									<Link href="https://corp.roblox.com/">Roblox</Link>, working
									on Search and Discovery. This summer, I will be joining{" "}
									<Link href="https://drw.com">DRW</Link> as a software
									engineering intern.
								</p>
								<p>
									Outside of the classroom, I play competitive table tennis. I
									also write problems for the{" "}
									<Link href="https://www.cs.utexas.edu/users/utpc/">
										UT Programming Contest
									</Link>
									. I also work on financial modelinng and development at{" "}
									<Link href="https://texasucf.org/">Texas UCF</Link>. Some of
									my other interests are Chess, Poker, and cooking food (of
									variable quality).
								</p>

								<b>Projects</b>

								<ul>
									<li>
										<Link href="https://usaco.guide">USACO Guide</Link> &#8212;
										leading competitive programming resource: 70K+ registered
										users, 17M+ pageviews, 1500+ Github stars.
									</li>
									<li>
										<Link href="https://www.ftx.markets/">FTX Markets</Link>{" "}
										&#8212; event-contract exchange and interface for betting on
										a fish's swimming patterns.
									</li>
									{/* <li>
										OS Kernel &#8212; implement syscalls, user-mode preemption,
										file system, forks, virtual memory, sync primitives;
										multiprocessing, ran Doom
									</li>
									<li>
										FunLang &#8212; toy programming language: wrote interpreter,
										specification, compiler(x86): constant folding, tail
										recursion + other optimizations; has loops, if/else, etc.
									</li> */}
								</ul>

								{/* <b>Graduate Coursework</b>
								<ul>
									<li>Reinforcement Learning: Theory and Practice (CS394R)</li>
								</ul>
								<b>Undergraduate Coursework</b>
								<ul>
									<li></li>
									<li>Honors Operating Systems (CS439H)</li>
									<li>Honors Computer Architecture (CS429H)</li>
									<li>Honors Programming Languages (CS345H)</li>
									<li>Honors Algorithms (CS331H)</li>
									<li>Honors Data Structures (CS314H)</li>
									<li>Honors Discrete Math (CS311H)</li>
									<li>Honors Vector Calculus (M427LH)</li>
									<li>Computer Vision (CS376)</li>
									<li>Programming for Performance (CS377P)</li>
									<li>Natural Language Processing (CS378)</li>
									<li>Stochastic Processes (M362M)</li>
									<li>Linear Algebra (M340L)</li>
									<li>Interest Theory (M329F)</li>
									<li>Statistics (M378K)</li>
								</ul> */}
								{/* TODO: add this back once you get some real blog posts */}
								{/* <p>
									I also like to write! You can read some blog posts below (and
									in the top bar tab).
								</p> */}
							</div>
							{/* <div className="m-4 p-4">
								<Image
									loader={defaultLoader}
									src="/headshot.png"
									alt="headshot"
									width={180}
									height={200}
									className="rounded-md bg-gray-200"
								/>
							</div> */}
						</div>
						{/* <div className="prose max-w-full w-full"></div> */}

						{/* <h2 className="text-2xl mt-5 mb-3 font-bold">Interests</h2> */}
						{/* <div className="prose overflow-x-auto dark:prose-dark w-full max-w-3xl mx-0"> */}
						{/* <li>
								My primary interests are in the research and development of
								intelligent robots
							</li> */}
						{/* <li>
								In my freetime, I play table tennis. Most non-covid years I
								travel to US Nationals and Open to play. You can find my profile{" "}
								<a href="https://usatt.simplycompete.com/userAccount/up/8291">
									here.
								</a>
							</li>
							<li>
								I've created several websites and apps - like this one - using
								Next.js, React, TailwindCSS, and various other modern
								frameworks. Aside from the web, I compete in various
								competitions using C++ and have created web automation tools
								using both Python and TypeScript.
							</li> */}

						{/* <h2 className="text-2xl font-bold">Website Plans</h2> */}
						{/* <div>
								<li>
									You can email me at{" "}
									<a href="mailto:neowangatx@gmail.com">neowangatx@gmail.com</a>{" "}
								</li> */}
						{/* <li>
									You can also subscribe to the mailing list below for updates!
								</li> */}
						{/* </div> */}
						{/* </div> */}
						{/* <div className="px-1 py-2"> */}
						{/* <Subscribe /> */}
						{/* </div> */}
					</div>
				</div>
				{/* featured blog posts */}
				<div className="mt-5">
					<p className="text-xl font-bold">Blog Posts</p>
					{/* <div className="w-full mt-4 border-b dark:border-gray-500" /> */}
				</div>
				<div className="w-full flex flex-col mt-4 mb-5">
					<Card
						to="/post/atcoderdp"
						src="c_scale,h_300,w_300/v1621301300/blog/2472890_ek5xdn.png"
						title="AtCoder DP Editorial"
						description="An editorial for all the problems contained in the AtCoder DP Contest"
					/>
					<Card
						src="c_scale,w_400/v1623724811/blog/abstract-1278077_1920_tbzj7y.jpg"
						to="/post/dpbitmasks"
						description="Quick introduction of bitmask programming"
						title="A Primer on Bitmask DP"
					/>
				</div>

				{/* <div className="w-full mb-4 border-b dark:border-gray-800" /> */}

				{/* projects and music */}

				{/* <div className="flex flex-col h-auto lg:flex-row w-full space-y-5">
					<div className="flex flex-col w-full lg:w-1/2 lg:mr-4">
						<p className="text-lg font-bold">Projects</p>
						<ProjectCard
							title="nwatx.me"
							description="This blog. Built with Next.js, styled with Tailwind, and deployed on Vercel."
							href="https://github.com/nwatx/nwatx-blog"
						/>
						<ProjectCard
							title="ShareLatex"
							description="A LaTeX + Markdown sharing app tool."
							href="https://sharelatex.vercel.app/"
						/>
						<ProjectCard
							title="Competitive Programming"
							description="C++, macros, and a lot of bad practices (repo currently private)."
							href="https://github.com/nwatx/CP"
						/>
					</div> */}
				{/* <div className="flex flex-col w-full lg:w-1/2 space-y-5 rounded-md justify-center">
						<p className="text-lg font-bold">Music</p>
						<iframe
							title="Spotify Playlist"
							className="w-full h-full rounded-md min-h-full"
							src="https://open.spotify.com/embed/playlist/3X2aZB9PPnkE9aLdnVQLmH"
							frameBorder="0"
							loading="lazy"
							allowTransparency={true}
							allow="encrypted-media"
						></iframe>
					</div> */}
				{/* </div> */}
				<div className="my-auto" />
				<div className="flex w-full px-3 mt-10 max-w-7xl">
					<div className="w-full justify-center text-center max-w-7xl">
						<ViewCounter slug={""} />
					</div>
				</div>
			</div>
		</NavBarLayout>
	);
}
