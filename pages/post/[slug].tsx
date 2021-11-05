import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote";
import { bundleMDX } from "mdx-bundler";
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
import EmblaCarousel from "../../components/carousel/EmblaCarousel";
import { getMDXComponent } from 'mdx-bundler/client'

// remark
import remarkGfm from 'remark-gfm'
import remarkMath from "remark-math";
import remarkTocHeadings from '../../lib/remark-toc-headings'
import remarkCodeTitles from '../../lib/remark-code-title'
// rehype
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
import rehypePrismPlus from 'rehype-prism-plus'

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
	Gallery: EmblaCarousel,
};

const BlogPost = ({ source, data, ...rest }) => {
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

	// takes the last two elements if the array >= 4 elements, making them blue
	let titleFirstPart;
	if (data.title) titleFirstPart = split(data.title);
	let titleSecondPart;
	if (titleFirstPart && titleFirstPart.length >= 4)
		titleSecondPart = titleFirstPart?.splice(-2)?.join(" ");
	titleFirstPart = titleFirstPart.join(" ");

	const MDXLayout = React.useMemo(() => getMDXComponent(source), [source]);

	return (
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
					<div className="flex flex-col w-full justify-center max-w-3xl mt-4 pb-10 md:pb-4 border-b my-4">
						<div className="text-4xl max-w-3xl flex flex-row w-full flex-wrap items-end">
							<p className="dark:text-gray-100 font-extrabold text-5xl">
								{titleFirstPart}{" "}
								<b className="text-blue-500">{titleSecondPart}</b>
							</p>
						</div>
						<div className="flex items-end flex-row flex-wrap w-full justify-between">
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
					<article className="prose dark:prose-dark 2xl:prose-lg overflow-x-auto w-full my-7 max-w-3xl mx-0">
						{/* {content} */}
						{/* <MDXRemote {...source} components={MDXComponents} /> */}
						<MDXLayout components={MDXComponents} {...rest} />
					</article>
					<div className="flex flex-row justify-center w-full pt-24 pb-36 items-center text-center">
						{/* <h1 className="text-center w-full text-2xl font-semibold">
							End of Article. Thanks for reading!
						</h1> */}
					</div>
				</div>
			</NavBarLayout>
		</>
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

	// const { data, content } = matter(markdownWithMetadata);

	// if(data['date']) data['date'] = data['date'].toLocaleDateString();
	// console.log(data, content); to see data content

	let toc = [];

	let { frontmatter, code } = await bundleMDX(markdownWithMetadata, {
		// mdx imports can be automatically source from the components directory
		cwd: path.join(process.cwd(), "components"),
		xdmOptions(options) {
			// this is the recommended way to add custom remark/rehype plugins:
			// The syntax might look weird, but it protects you in case we add/remove
			// plugins in the future.
			options.remarkPlugins = [
				...(options.remarkPlugins ?? []),
				// [remarkTocHeadings, { exportRef: toc }],
				remarkGfm,
				remarkCodeTitles,
				remarkMath,
			];
			options.rehypePlugins = [
				// ...(options.rehypePlugins ?? []),
				// @ts-ignore
				rehypeSlug,
				// @ts-ignore
				rehypeAutolinkHeadings,
				// @ts-ignore
				rehypeKatex,
				// @ts-ignore
				[rehypePrismPlus, { ignoreMissing: true }],
			];
			return options;
		},
		esbuildOptions: (options) => {
			options.loader = {
				...options.loader,
				".js": "jsx"
			};
			return options;
		},
	});

	const provider = {
		props: {},
	};

	frontmatter["author"] = frontmatter["author"] || "Neo Wang";
	frontmatter['date'] = frontmatter['date'].toString();

	return {
		props: {
			source: code,
			toc,
			data: frontmatter,
		},
	};
}
