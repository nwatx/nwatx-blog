import NavBarLayout from "../layouts/NavBarLayout";
import fs from "fs";
import matter from "gray-matter";
import BlogPost from "../components/BlogPost";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BlogPostProps } from "../components/BlogPost";
import ViewCounter from "../components/ViewCounter";
import { TagColor } from "../components/TagColors";
import ProjectCard from "../components/ProjectCard";
import NextImage from "next/image";
import Card from "../components/Card";

type Post = {
	slug;
	frontmatter: BlogPostProps;
};

type HomeProps = {
	posts: Post[];
};

export default function Home({ posts }: HomeProps) {
	// console.log(posts); // show graymatter data

	const [filters, setFilters] = useState([]);
	const postTags = posts
		.map((post) => {
			if (post.frontmatter.tags)
				return post.frontmatter.tags
					.trim()
					.split(",")
					.map((s) => s.trim());
		})
		.flat();

	const uniquePostTags = Array.from(new Set<string>(postTags))
		.sort()
		.filter((e) => e.trim());

	console.log(uniquePostTags);

	useEffect(() => {
		setFilters([]);
	}, []);

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
				<div className="flex flex-col md:flex-row max-w-7xl w-full">
					<div className="flex w-full md:w-1/2 relative">
						<NextImage width={1120} height={750} src={"/landing.png"} />
					</div>
					<div className="flex flex-col w-full md:w-1/2 prose justify-center items-center">
						<h1 className='dark:text-white'>Welcome to Neo's website</h1>
						<p>A general hub of sorts for my personal interests.</p>
					</div>
				</div>
				<div className="w-full flex flex-1 space-x-4 my-5">
					<Card
						to="/post/svd"
						src="/landing.png"
						description="yes"
						title="Singular Value Decomposition"
					/>
					<Card
						src="/landing.png"
						to="/post/dpbitmasks"
						description="Quick introduction of bitmask programming"
						title="A Primer on Bitmask DP"
					/>
				</div>

				<div className="flex flex-col h-auto lg:flex-row w-full lg:space-x-5 space-y-5">
					<div className="flex flex-col w-full lg:w-1/2">
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
					<div className="flex flex-col w-full lg:w-1/2 space-y-5 border-dashed border-2 rounded-md justify-center">
						<p className="text-gray-400 self-center">Coming soon!</p>
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

export async function getStaticProps() {
	const files = fs.readdirSync(`${process.cwd()}/content/`);

	const posts = files.map((filename) => {
		const markdownWithMetadata = fs
			.readFileSync(`content/${filename}`)
			.toString();

		const { data } = matter(markdownWithMetadata);

		console.log(data);

		const frontmatter = {
			...data,
			date: data.date.toISOString(),
			filename: filename.replace(".mdx", ""),
		};

		return {
			slug: filename.replace(".mdx", ""),
			frontmatter,
		};
	});

	return {
		props: {
			posts,
		},
	};
}
