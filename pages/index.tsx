import NavBarLayout from "../layouts/NavBarLayout";
import Head from "next/head";
import ViewCounter from "../components/ViewCounter";
import ProjectCard from "../components/ProjectCard";
import Card from "../components/Card";
import { MailIcon } from "../components/Heroicons";
import Link from "next/link";
import { defaultLoader } from "../lib/defaultLoader";
import Image from 'next/image'

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
				<div className="flex flex-col md:flex-row w-full">
					<div className="flex flex-col w-full p-3  justify-center text-center relative">
						{/* <Image
							loader={defaultLoader}
							alt="chill code svg"
							className="rounded-lg"
							width={1120}
							height={750}
							src={"/landing.svg"}
							priority
						/> */}
						<h1 className='text-3xl my-3'>Neo Wang - WHS '22</h1>
						<h1 className='font-light'>Welcome to my website. I store resources, notes, and editorials here for reference.</h1>
					</div>
				</div>
				<div className="mt-5 pt-5 pb-3 text-center">
					<p className="text-3xl">Featured Blog Posts</p>
				</div>
				<div className="w-full flex flex-1 space-x-4 my-5">
					<Card
						to="/post/svd"
						src="v1621301300/blog/svd_awgmuh.png"
						title="Singular Value Decomposition"
						width={600}
						height={545}
					/>
					<Card
						src="v1623724811/blog/abstract-1278077_1920_tbzj7y.jpg"
						to="/post/dpbitmasks"
						description="Quick introduction of bitmask programming"
						width={960}
						height={675}
						title="A Primer on Bitmask DP"
					/>
				</div>

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
						{/* <p className="text-gray-400 self-center">Coming soon!</p> */}
						<p className="text-lg font-bold">Music</p>
						<iframe
							title="Spotify Playlist"
							className="w-full h-full rounded-md min-h-full"
							src="https://open.spotify.com/embed/playlist/3X2aZB9PPnkE9aLdnVQLmH"
							frameBorder="0"
							loading='lazy'
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
