import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import NavBarLayout from "../../layouts/NavBarLayout";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-java";
import matter from "gray-matter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Head from "next/head";
import NextLink from "../../components/NextLink";
import { blockquote } from "../../components/mdx";
import ViewCounter from "../../components/ViewCounter";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Image from "next/image";
import ProsCard from "../../components/ProsCard";
import ProblemCard from "../../components/ProblemCard";
import WarningCard from "../../components/Warning";

export const ImageLoader = (src) => {
	console.log(src);
	return `https://res.cloudinary.com/dcg5b3jpt/image/upload/v1615871692/blog/${src}`;
};

export const MDXComponents = {
	img: (props) => {
		// console.log(JSON.stringify(props));
		const { src, ...rest } = props;
		const url = ImageLoader(src);
		return (
			<LazyLoadImage
				delayTime={0}
				className="rounded-md"
				effect="blur"
				src={url}
				{...rest}
			/>
		);
	},
	a: NextLink,
	// h1: h1,
	// h2: h2,
	// h3: h3,
	blockquote: blockquote,
	// p: p,
	// ol: ol,
	// inlineCode: code,
	NextImage: (props) => (
		<div className="my-12 w-full justify-center">
			<Image layout="responsive" className="rounded-md" {...props} />
		</div>
	),
	Pros: ProsCard,
	Problem: ProblemCard,
	Warning: WarningCard,
};

const BlogPost = ({ source, data }) => {
	// const content = hydrate(source, { components: MDXComponents });
	const router = useRouter();

	useEffect(() => {
		Prism.highlightAll();
	});

	// useEffect(() => {
	//   if (ref.current) {
	//     renderMathInElement(ref.current, {
	//       delimiters: [
	//         { left: "$$", right: "$$", display: true },
	//         { left: "$", right: "$", display: false },
	//       ],
	//     });
	//   }
	// }, [ref.current]);

	// split a string by whitespace

	const split = (str) => {
		return str.split(/\s+/);
	};

	let titleFirstPart;
	if (data.title) titleFirstPart = split(data.title);
	let titleSecondPart;
	if (titleFirstPart && titleFirstPart.length >= 4) titleSecondPart = titleFirstPart?.splice(-2)?.join(" ");
	titleFirstPart = titleFirstPart.join(" ");
	console.log(titleFirstPart, titleSecondPart);

	return (
		// <MDXProvider>
		<>
			<Head>
				<title>
					{data.title} - {data.author || "Neo Wang"}
				</title>
				<meta
					name="description"
					content={`${data.description || data.title}`}
				/>
			</Head>
			<NavBarLayout>
				<div className="flex xl:ml-2 w-full flex-col items-center">
					{/* <div className="flex w-full max-w-7xl p-1 border-b flex-col"> */}
					<div className="flex flex-col w-full justify-center max-w-3xl mt-4 pb-10 md:pb-4 border-b my-4">
						<div className="text-4xl max-w-3xl flex flex-row w-full flex-wrap items-end">
							<p className="dark:text-gray-100 font-extrabold text-5xl">
								{titleFirstPart} <b className='text-blue-500'>{titleSecondPart}</b>
							</p>
						</div>
						<div className="flex items-end flex-row flex-wrap w-full justify-between">
							{/* {data.description && (
                <h2 className="text-xl mt-1 text-gray-500 dark:text-gray-300">
                  {data.description}
                </h2>
              )} */}
							{data.author && data.date && (
								<div className="flex mt-2 flex-row w-full flex-wrap justify-between align-text-bottom">
									<p className="text-sm text-gray-600 dark:text-gray-400">
										{`${data.author} / ${format(
											new Date(data.date),
											"MMMM dd, yyyy"
										)}`}
									</p>
									<ViewCounter
										slug={router.query.slug as string}
										styles={"text-gray-600"}
									/>
								</div>
							)}
						</div>
					</div>
					{/* <div className="flex justify-center mt-5 pb-10 md:pb-4 w-full"> */}
					{/* <div className="flex w-full flex-col relative"> */}
					<article className="prose overflow-x-auto dark:prose-dark w-full my-7 max-w-3xl mx-0">
						{/* {content} */}
						<MDXRemote {...source} components={MDXComponents} />
					</article>
					{/* </div> */}
					{/* </div> */}
				</div>
			</NavBarLayout>
		</>
		// </MDXProvider>
	);
};

export default React.memo(BlogPost);

export async function getStaticPaths() {
	const files = fs.readdirSync("content");

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".mdx", ""), // helloworld.mdx => helloworld
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMetadata = fs
		.readFileSync(path.join("content", slug + ".mdx"))
		.toString();

	const { data, content } = matter(markdownWithMetadata);

	// if(data['date']) data['date'] = data['date'].toLocaleDateString();
	// console.log(data, content); to see data content

	const source = await serialize(content, {
		// components: MDXComponents,
		mdxOptions: {
			remarkPlugins: [
				require("remark-math"),
				require("remark-slug"),
				require("remark-code-titles"),
				require("remark-autolink-headings"),
			],
			rehypePlugins: [
				require("rehype-katex"),
				require("rehype-slug"),
				require("@mapbox/rehype-prism"),
				// require("@jsdevtools/rehype-toc"),
				// require('rehype-autolink-headings'),
				// require('rehype-sanitize')
			],
		},
		scope: {
			slug,
		},
	});

	const provider = {
		props: {},
	};

	// const convertedSource = {
	//   ...source,
	//   renderedOutput: source.renderedOutput.split("[slug]").join(slug as string),
	//   compiledSource: source.compiledSource.split("[slug]").join(slug as string),
	// };

	// console.log(source);

	const frontmatter = {
		...data,
		date: data.date.toISOString(),
	};

	frontmatter["author"] = frontmatter["author"] || "Neo Wang";

	// source.renderedOutput = source.renderedOutput.replaceAll('<!-- -->', '');

	// source.renderedOutput = source.renderedOutput.split("<!-- -->").join("");

	// console.log(source.renderedOutput);

	// console.log(markdownWithMetadata);

	return {
		props: {
			source: source,
			data: frontmatter,
		},
	};
}
