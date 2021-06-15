import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { useEffect } from "react";
import { MDXComponents } from "../pages/post/[slug]";
import Prism from "prismjs";

const MDXPreview = ({ source }) => {
	// const content = hydrate(source, { components: MDXComponents });

	useEffect(() => {
		Prism.highlightAll();
	});

	return (
		<MDXProvider>
			<div className="flex rounded-md p-2 flex-col space-y-4 w-full prose dark:prose-dark">
				<MDXRemote {...source} components={MDXComponents} />
			</div>
		</MDXProvider>
	);
};

export default MDXPreview;
