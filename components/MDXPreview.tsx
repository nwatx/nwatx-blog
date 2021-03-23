import { MDXProvider } from "@mdx-js/react";
import hydrate from "next-mdx-remote/hydrate";
import { MDXComponents } from "../pages/post/[slug]";

const MDXPreview = ({ source }) => {
  const content = hydrate(source, { components: MDXComponents });
  return (
    <MDXProvider>
      <div>{content}</div>
    </MDXProvider>
  );
};

export default MDXPreview;
