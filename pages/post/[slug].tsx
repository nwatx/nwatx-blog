import React from "react";
import fs from "fs";
import path from "path";
import { MDXProvider } from "@mdx-js/react";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import NavBarLayout from "../../layouts/NavBarLayout";

const BlogPost = ({ source }) => {
  const content = hydrate(source);

  return (
    <MDXProvider>
      <NavBarLayout>
        <div className="flex w-full justify-center">
          <div className="">{content}</div>
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

  const source = await renderToString(markdownWithMetadata, {
    scope: {},
  });

  // console.log(markdownWithMetadata);

  return {
    props: {
      source,
    },
  };
}
