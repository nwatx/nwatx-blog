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
import {
  Editor,
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
} from "react-live";
import { MdxRemote } from "next-mdx-remote/types";
import MDXPreview from "../components/MDXPreview";
import { highlight, languages } from "prismjs/components/prism-core";

export default function mdxpreview({ children }) {
  const [mdxContent, setMdxContent] = useState("");
  const [renderOutput, setRenderOutput] = useState("");
  const [source, setSource] = useState<MdxRemote.Source>();

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
          setSource(source);
        }
      });
  }, [mdxContent]);

  return (
    <LiveProvider code={renderOutput} scope={{ mdx: mdx }}>
      <NavBarLayout>
        <div className="flex flex-row w-full space-x-2 max-w-7xl">
          {/* <div className="flex w-1/2"> */}
            <Editor
              value={mdxContent}
              onChange={(code) => setMdxContent(code)}
              cellPadding={10}
              className='flex w-1/2 bg-gray-800 rounded-md'
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                caretColor: 'white'
              }}
            />
            {/* <textarea
              className="flex p-5 w-full rounded-md resize-y"
              onChange={(e) => setMdxContent(e.target.value)}
            /> */}
          {/* </div> */}
          <div className="flex flex-wrap overflow-y-auto w-1/2">
            {source && <MDXPreview source={source} />}
          </div>
        </div>
      </NavBarLayout>
    </LiveProvider>
  );
}
