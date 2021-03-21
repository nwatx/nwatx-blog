import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import { MDXProvider } from "@mdx-js/react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
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
import { blockquote, h1, h2, h3 } from "../../components/mdx";
import ViewCounter from "../../components/ViewCounter";
import { useRouter } from "next/router";

export const ImageLoader = (src) => {
  console.log(src);
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
  blockquote: blockquote,
  // p: Tex,
};

const BlogPost = ({ source, data }) => {
  const content = hydrate(source, { components: MDXComponents });
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
        <div className="flex w-full max-w-7xl flex-col items-center">
          {/* <div className="flex w-full max-w-7xl p-1 border-b flex-col"> */}
          <div className="flex flex-col w-full justify-center max-w-7xl mt-4 pb-10 md:pb-4 border-b">
            <div className="text-4xl max-w-7xl flex flex-row w-ful justify-between items-end">
              <p className="dark:text-gray-100">
                {data.title}{" "}
              </p>
              <p className="text-base font-light">
                <b>{data.author}</b> on{" "}
                <b>{new Date(data.date).toLocaleDateString()}</b>
              </p>
            </div>
            <div className="flex flex-col items-end lg:flex-row w-full lg:justify-between">
              {data.description && (
                <h2 className="text-xl font-light mt-1 text-gray-500 dark:text-gray-300">
                  {data.description}
                </h2>
              )}
              <ViewCounter slug={router.query.slug} />
            </div>
          </div>
          <div className="flex justify-center max-w-7xl p-1 mt-4 pb-10 md:pb-4 w-full">
            <div className="flex w-full flex-col space-y-4">{content}</div>
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

  // if(data['date']) data['date'] = data['date'].toLocaleDateString();
  // console.log(data, content); to see data content

  const source = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [require("remark-math")],
      rehypePlugins: [require("rehype-katex")],
    },
  });

  console.log(data);

  const frontmatter = {
    ...data,
    date: data.date.toISOString(),
  };

  // source.renderedOutput = source.renderedOutput.replaceAll('<!-- -->', '');

  // source.renderedOutput = source.renderedOutput.split("<!-- -->").join("");

  // console.log(source.renderedOutput);

  // console.log(markdownWithMetadata);

  return {
    props: {
      source,
      data: frontmatter,
    },
  };
}
