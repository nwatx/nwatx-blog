import NavBarLayout from "../layouts/NavBarLayout";
import Head from "next/head";
import ViewCounter from "../components/ViewCounter";
import ProjectCard from "../components/ProjectCard";
import Card from "../components/Card";
import { MailIcon } from "../components/Heroicons";
import Link from "next/link";
import { defaultLoader } from "../lib/defaultLoader";
import Image from "next/image";
import Subscribe from "../components/Subscribe";
import Tag from "../components/Tag";

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
			<div className="flex h-full scrollbar-thin overflow-auto scrollbar-thumb-rounded justify-between w-full flex-col max-w-7xl">
				{/* about me section */}
				<div className="flex flex-col md:flex-row w-full">
					<div className="flex flex-col w-full py-3 justify-center relative">
						{/* TODO: add image of myself later */}
						<h1 className="text-4xl my-3 font-extrabold">Neo Wang</h1>
						<div className="w-full mt-4 border-b dark:border-gray-500" />
						<div className="prose max-w-3xl mt-6">
							<p>
								Welcome to my website! I store resources, notes, and editorials
								here for future reference, as well keep track of some projects
								I've done.
							</p>
						</div>

						{/* <h2 className="text-2xl mt-5 mb-3 font-bold">Interests</h2> */}
						<div className="prose overflow-x-auto dark:prose-dark w-full max-w-3xl mx-0">
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
							<div>
								<li>
									Want to contribute or have an idea? Email me at{" "}
									<a href="mailto:neowangatx@gmail.com">neowangatx@gmail.com</a>
								</li>
								<li>
									You can also subscribe to the mailing list below for updates!
								</li>
							</div>
						</div>
						<div className="px-1 py-2">
							<Subscribe />
						</div>
					</div>
				</div>
				{/* featured blog posts */}
				<div className="mt-5 pt-5 pb-3">
					<p className="text-3xl font-bold">Featured Blog Posts</p>
					<div className="w-full mt-4 border-b dark:border-gray-500" />
				</div>
				<div className="w-full flex flex-col md:flex-row mt-4 mb-5">
					<Card
						to="/post/svd"
						src="c_scale,h_300,w_300/v1621301300/blog/svd_awgmuh.png"
						title="Singular Value Decomposition"
						description="Singular Value Decomposition worked two-ways"
					/>
					<Card
						src="c_scale,w_400/v1623724811/blog/abstract-1278077_1920_tbzj7y.jpg"
						to="/post/dpbitmasks"
						description="Quick introduction of bitmask programming"
						title="A Primer on Bitmask DP"
					/>
				</div>

				<div className="w-full mb-4 border-b dark:border-gray-800" />

				{/* projects and music */}

				<div className="flex flex-col h-auto lg:flex-row w-full space-y-5">
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
					</div>
					<div className="flex flex-col w-full lg:w-1/2 space-y-5 rounded-md justify-center">
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
					</div>
				</div>
				<div className="flex w-full px-3 mt-10 max-w-7xl">
					<div className="w-full justify-center text-center max-w-7xl">
						<ViewCounter slug={""} />
					</div>
				</div>
			</div>
		</NavBarLayout>
	);
}
