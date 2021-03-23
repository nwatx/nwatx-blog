import React, {
  createElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import NavBarLayout from "../layouts/NavBarLayout";
import Prism from "prismjs";
import { mdx } from "@mdx-js/react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { MdxRemote } from "next-mdx-remote/types";
import MDXPreview from "../components/MDXPreview";

export default function mdxpreview({ children }) {
  const [mdxContent, setMdxContent] = useState("");
  const [renderOutput, setRenderOutput] = useState("");
  const [source, setSource] = useState<MdxRemote.Source>();

  // console.log(mdxContent);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    if (!mdxContent) return;
    fetch("/api/render", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        markdown: mdxContent,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const { source, error } = res;
        if (error) {
          console.error("error");
        } else {
          //   const newContent = hydrate(renderedOutput, {
          // components: MDXComponents,
          //   });

          //   console.log(newContent);
          // console.log(source);
          setSource(source);
        }
      });
  }, [mdxContent]);

  //   useEffect(() => {
  //     if (source) {
  //       setContent(
  //         hydrate(source, {
  //           components: MDXComponents,
  //         })
  //       );
  //     }
  //   }, [source]);

  //   console.log("renderoutput", renderOutput);

  return (
    <LiveProvider code={renderOutput} scope={{ mdx: mdx }}>
      <NavBarLayout>
        <div className="flex flex-row w-full">
          {/* <div className="flex w-1/2"> */}
          {/* <textarea
            onChange={(e) => setMdxContent(e.target.value)}
            className="resize-y rounded-md w-full"
          /> */}
          <div className="bg-white flex w-1/2">
            <LiveEditor
              onChange={(code) => setMdxContent(code)}
              style={{ width: "100%" }}
            />
          </div>
          <div className="w-1/2">
            {source && <MDXPreview source={source} />}
          </div>
          {/* </div> */}
          {/* <div className="flex w-1/2"> */}
          {/* {mdxContent && compiledMarkdown(mdxContent)} */}
          {/* </div> */}
        </div>
      </NavBarLayout>
    </LiveProvider>
  );
}
