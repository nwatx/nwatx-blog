import React, { useEffect, useState } from "react";
import NavBarLayout from "../layouts/NavBarLayout";
import { MdxRemote } from "next-mdx-remote/types";
import MDXPreview from "../components/MDXPreview";
import Editor from "rich-markdown-editor";

export default function mdxpreview({ children }) {
  const [mdxContent, setMdxContent] = useState("");
  const [renderOutput, setRenderOutput] = useState("");
  const [source, setSource] = useState<MdxRemote.Source>();
  const [richEditor, setRichEditor] = useState(false);

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
    <NavBarLayout>
      <div className="flex flex-col w-full space-x-2 max-w-7xl">
        <div
          className="flex w-full cursor-pointer"
          onClick={() => setRichEditor(!richEditor)}
        >
          Rich editor: {richEditor ? "on" : "off"}
        </div>
        <div className="flex flex-row space-x-3 h-auto">
          <div className="w-1/2">
            {richEditor ? (
              <Editor
                defaultValue={mdxContent}
                className="bg-gray-100"
                onChange={(value) => setMdxContent(value())}
              />
            ) : (
              <textarea
                defaultValue={mdxContent}
                className="w-full h-full resize-none bg-gray-800 rounded-l-md outline-none text-white p-5 whitespace-pre-wrap"
                onChange={(e) => setMdxContent(e.target.value)}
              />
            )}
            {/* <textarea
              className="flex p-5 w-full rounded-md resize-y"
              onChange={(e) => setMdxContent(e.target.value)}
            /> */}
          </div>
          <div className="flex flex-wrap overflow-y-auto w-1/2">
            {source && <MDXPreview source={source} />}
          </div>
        </div>
      </div>
    </NavBarLayout>
  );
}
