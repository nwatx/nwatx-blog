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
  // p: Tex,
};

const BlogPost = ({ source, data }) => {
  const content = hydrate(source, { components: MDXComponents });

  const ref = useRef(null);
  // console.log(data);

  useEffect(() => {
    Prism.highlightAll();
  });

  useEffect(() => {
    if (ref.current) {
      renderMathInElement(ref.current, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
        ],
      });
    }
  }, [ref.current]);

  return (
    <MDXProvider>
      <NavBarLayout>
        <div className="flex w-full 2xl:w-1/3 flex-col items-center">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">
              <p>{data.title}</p>
            </div>
          </div>
          <div className="flex">
            <div ref={ref}>
              {content}
            </div>
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
    scope: {},
    components: MDXComponents,
  });

  // console.log(source);

  // console.log(markdownWithMetadata);

  return {
    props: {
      source,
      data,
    },
  };
}
