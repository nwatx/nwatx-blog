import React, { useEffect, useRef } from "react";
import fs from "fs";
import path from "path";
import { MDXProvider } from "@mdx-js/react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import NavBarLayout from "../../layouts/NavBarLayout";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import matter from "gray-matter";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import renderMathInElement from "katex/dist/contrib/auto-render";
import Link from "next/link";
import Head from "next/head";
import NextLink from "../../components/NextLink";
import { h1, h2, h3 } from "../../components/mdx";

const ImageLoader = (src) => {
  return `https://res.cloudinary.com/dcg5b3jpt/image/upload/v1615871692/blog/${src}`;
};

const MDXComponents = {
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
  h1: h1,
  h2: h2,
  h3: h3,
  // p: Tex,
};

const BlogPost = ({ source, data }) => {
  const content = hydrate(source, { components: MDXComponents });

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

  return (
    <MDXProvider>
      <Head>
        <title>
          {data.title} - {data.author || "nwatx"}
        </title>
        <meta
          name="description"
          content={`${data.description || data.title}`}
        />
      </Head>
      <NavBarLayout>
        <div className="flex w-full 2xl:w-1/2 flex-col items-center">
          <div className="flex w-full p-1 border-b flex-col">
            <div className="text-4xl font-bold">
              <p>{data.title}</p>
            </div>
            {data.description && (
              <h2 className="text-xl font-semibold text-gray-400">
                {data.description}
              </h2>
            )}
          </div>
          <div className="flex justify-center p-1 pb-10 md:pb-4 w-full">
            <div className="flex w-full flex-col">{content}</div>
          </div>
        </div>
      </NavBarLayout>
    </MDXProvider>
  );
};

export default BlogPost;

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
  // console.log(data, content); to see data content

  const source = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require("remark-math")],
      rehypePlugins: [require("rehype-katex")],
    },
  });

  // source.renderedOutput = source.renderedOutput.replaceAll('<!-- -->', '');

  // source.renderedOutput = source.renderedOutput.split("<!-- -->").join("");

  // console.log(source.renderedOutput);

  // console.log(markdownWithMetadata);

  return {
    props: {
      source,
      data,
    },
  };
}
