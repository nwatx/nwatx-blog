import { MDXProvider } from "@mdx-js/react";
import hydrate from "next-mdx-remote/hydrate";
import { useEffect } from "react";
import { MDXComponents } from "../pages/post/[slug]";
import Prism from 'prismjs'

const MDXPreview = ({ source }) => {
  const content = hydrate(source, { components: MDXComponents });

  useEffect(() => {
    Prism.highlightAll();
  })

  return (
    <MDXProvider>
      <div className='flex border-2 border-dashed rounded-md p-2 flex-col space-y-4 w-full flex-wrap whitespace-normal break-normal'>{content}</div>
    </MDXProvider>
  );
};

export default MDXPreview;
