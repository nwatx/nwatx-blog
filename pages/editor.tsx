import React, { useEffect, useState } from "react";
import NavBarLayout from "../layouts/NavBarLayout";
import { MdxRemote } from "next-mdx-remote/types";
import MDXPreview from "../components/MDXPreview";
import Editor from "rich-markdown-editor";
import { useTheme } from "next-themes";
import { dark } from "../lib/editorTheme";
import ViewCounter from "../components/ViewCounter";

export default function mdxpreview({ children }) {
  const [mdxContent, setMdxContent] = useState("");
  const [renderOutput, setRenderOutput] = useState("");
  const [source, setSource] = useState<MdxRemote.Source>();
  const [richEditor, setRichEditor] = useState(false);
  const [editorType, setEditorType] = useState("column");
  const { theme } = useTheme();

  // useEffect(() => {
  //   console.log(theme);
  // })

  useEffect(() => {
    if (!mdxContent) return;
    const render = () => {
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
    };

    let id = setTimeout(render, 1000);
    return () => clearTimeout(id);
  }, [mdxContent]);

  return (
    <NavBarLayout>
      <div className="flex flex-col w-full space-x-2 max-w-7xl">
        <div className="flex pb-2 px-2 w-full items-center justify-start space-x-3">
          <div className="flex text-sm items-center space-x-2 flex-row">
            <p>Enable Rich Editor</p>
            <div
              onClick={() => setRichEditor(true)}
              className={`border shadow-sm cursor-pointer py-1 px-2 rounded-md ${
                richEditor && "border-blue-500"
              }`}
            >
              <p>On</p>
            </div>
            <div
              onClick={() => setRichEditor(false)}
              className={`border shadow-sm cursor-pointer px-2 py-1 rounded-md ${
                !richEditor && "border-blue-500"
              }`}
            >
              <p>Off</p>
            </div>
          </div>
          <p className="text-gray-300 dark:text-gray-600">•</p>
          <div className="flex text-sm items-center space-x-2 flex-row">
            <p>Select Editor Type</p>
            <div
              onClick={() => setEditorType("row")}
              className={`border shadow-sm cursor-pointer py-1 px-2 rounded-md ${
                editorType === "row" && "border-blue-500"
              }`}
            >
              <p>Row</p>
            </div>
            <div
              onClick={() => setEditorType("column")}
              className={`border shadow-sm cursor-pointer px-2 py-1 rounded-md ${
                editorType === "column" && "border-blue-500"
              }`}
            >
              <p>Column</p>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-1 ${
            editorType === "" ? "flex-col md:flex-row" : ""
          } ${editorType === "row" ? "flex-col" : ""} ${
            editorType === "column" ? "flex-row" : ""
          } ${editorType === "column" ? "space-x-3" : "space-y-3"} h-auto max-h-full`}
        >
          <div
            className={`${
              editorType === "row" ? "w-full h-1/2" : "h-full w-1/2"
            }`}
            // } ${theme === "dark" && "bg-gray-700"} rounded-sm`}
          >
            {richEditor ? (
              <Editor
                defaultValue={mdxContent}
                {...(theme === "dark" && { theme: dark })}
                onChange={(value) => setMdxContent(value())}
              />
            ) : (
              <textarea
                defaultValue={mdxContent}
                placeholder="Enlighten the world..."
                className="w-full h-full resize-none text-sm bg-gray-800 dark:bg-gray-700 rounded-md outline-none text-white p-5 whitespace-pre-wrap"
                onChange={(e) => setMdxContent(e.target.value)}
              />
            )}
            {/* <textarea
              className="flex p-5 w-full rounded-md resize-y"
              onChange={(e) => setMdxContent(e.target.value)}
            /> */}
            <ViewCounter invisible={true} slug={"editor"} />
          </div>
          <div
            className={`flex flex-col overflow-auto max-h-full ${
              editorType === "row" ? "h-1/2 w-full" : "w-1/2"
            }`}
          >
            {source && mdxContent ? (
              <MDXPreview source={source} />
            ) : (
              <div className="flex w-full h-full border-dashed border-2 rounded-md items-center justify-center">
                <p className="text-gray-400 text-sm font-light">
                  Content appears here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </NavBarLayout>
  );
}
