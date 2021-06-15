import matter from "gray-matter";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "next-mdx-remote/serialize";
// import renderToString from "next-mdx-remote/render-to-string";
import { MDXComponents } from "../post/[slug]";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { markdown } = req.body;

    try {
      const { data, content } = matter(markdown);
      const source = await serialize(content, {
        // components: MDXComponents,
        mdxOptions: {
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
        },
      });

    //   console.log(data);
    //   console.log(source);

      const frontmatter = {
        ...data,
        date: (data.date ? data.date.toISOString() : ''),
      };

      res.status(200).json({
        data: frontmatter,
        source,
      });
    } catch {
      res.status(500).json({
        error: "Could not process markdown",
      });
    }
  }
  // source.renderedOutput = source.renderedOutput.replaceAll('<!-- -->', '');

  // source.renderedOutput = source.renderedOutput.split("<!-- -->").join("");

  // console.log(source.renderedOutput);

  // console.log(markdownWithMetadata);
}
