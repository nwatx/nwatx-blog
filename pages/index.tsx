import NavBarLayout from "../layouts/NavBarLayout";
import fs from "fs";
import matter from "gray-matter";
import BlogPost from "../components/BlogPost";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BlogPostProps } from "../components/BlogPost";
import ViewCounter from "../components/ViewCounter";
import { TagColor } from "../components/TagColors";
import ProjectCard from "../components/ProjectCard";

type Post = {
  slug;
  frontmatter: BlogPostProps;
};

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  // console.log(posts); // show graymatter data

  const [filters, setFilters] = useState([]);
  const postTags = posts
    .map((post) => {
      if (post.frontmatter.tags)
        return post.frontmatter.tags
          .trim()
          .split(",")
          .map((s) => s.trim());
    })
    .flat();

  const uniquePostTags = Array.from(new Set<string>(postTags))
    .sort()
    .filter((e) => e.trim());

  console.log(uniquePostTags);

  useEffect(() => {
    setFilters([]);
  }, []);

  return (
    <NavBarLayout>
      <Head>
        <title>Neo Wang - Blog</title>
        <meta
          name="description"
          content="Neo Wang's blog - code, ping pong, and more!"
        />
        <meta
          name="keywords"
          content="nwatx, Neo Wang, Next.js, Next.js blog"
        />
      </Head>
      <div className="flex h-full scrollbar-thin overflow-auto scrollbar-thumb-rounded justify-between w-full flex-col max-w-7xl">
        <div className="flex flex-col max-w-7xl w-full">
          {/* <div className="flex w-full">
            <p className="text-4xl dark:text-white">Blog</p>
          </div> */}
          {/* <div className="flex w-full">
          <p className="text-lg">Tags</p>
        </div> */}
          {posts && (
            <div className="flex w-full flex-row items-baseline">
              {uniquePostTags && (
                <div className="flex flex-row flex-wrap items-baseline mt-1 mb-2 space-y-2">
                  {uniquePostTags
                    .sort((a, b) => a.trim().localeCompare(b.trim()))
                    .map((tag) => (
                      <div
                        className={`flex text-xs mr-2 uppercase flex-row items-center py-1.5 px-2 space-x-3 rounded-md cursor-pointer ${
                          TagColor[tag]
                            ? TagColor[tag][0]
                            : "bg-gray-50 dark:bg-gray-800 dark:text-white"
                        }`}
                        onClick={() => {
                          if (!filters.includes(tag)) {
                            setFilters([...filters, tag]);
                          }
                        }}
                      >
                        <p
                          className={`mt-0 ${
                            TagColor[tag] && TagColor[tag][1]
                          }`}
                        >
                          {tag}
                        </p>
                        {filters.includes(tag) && (
                          <div
                            className="px-2 flex flex-col justify-center rounded-full"
                            onClick={() =>
                              setFilters(filters.filter((f) => f !== tag))
                            }
                          >
                            <p
                              className={`mt-0 ${
                                TagColor[tag] && TagColor[tag][1]
                              } self-center text-xs`}
                            >
                              x
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  {filters && (
                    <div
                      // style={{isolation: 'isolate'}}
                      className={`text-xs h-auto flex items-center border-2 py-1 px-2 ${
                        filters.length === 0
                          ? "disabled border-gray-300 dark:border-gray-700 text-gray-300 dark:text-gray-700 cursor-default"
                          : " text-gray-700 border-gray-700 dark:text-gray-300 dark:border-gray-300 cursor-pointer"
                      } rounded-md`}
                      onClick={() => setFilters([])}
                    >
                      <p
                        className={`${
                          filters.length === 0
                            ? "text-gray-300 dark:text-gray-700"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Clear
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="flex flex-col w-full overflow-hidden divide-y dark:divide-gray-400 mt-0">
            {posts &&
              posts
                .filter((p) => {
                  if (filters.length === 0) return true;
                  if (!p.frontmatter.tags && filters.length) return false;
                  return filters.every((filter) =>
                    p.frontmatter.tags
                      .split(",")
                      .map((e) => e.trim())
                      .includes(filter)
                  );
                })
                .sort((a, b) => {
                  return (
                    new Date(b.frontmatter.date).getTime() -
                    new Date(a.frontmatter.date).getTime()
                  );
                })
                .map((post) => (
                  <div className="py-5">
                    <BlogPost
                      key={post.slug}
                      slug={post.slug}
                      {...post.frontmatter}
                    />
                  </div>
                ))}
          </div>
        </div>
        <div className="flex flex-col h-auto lg:flex-row w-full lg:space-x-5 space-y-5">
          <div className="flex flex-col w-full lg:w-1/2">
            <p className="text-lg font-bold">Projects</p>
            <ProjectCard
              title="nwatx.me"
              description="This blog. Built with Next.js, styled with Tailwind, and deployed on Vercel."
              href="https://github.com/nwatx/nwatx-blog"
            />
            <ProjectCard
              title="ShareLatex"
              description="A LaTeX + Markdown sharing app tool."
              href="https://sharelatex.vercel.app/"
            />
            <ProjectCard
              title="Competitive Programming"
              description="C++, macros, and a lot of bad practices (repo currently private)."
              href="https://github.com/nwatx/CP"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 space-y-5 border-dashed border-2 rounded-md justify-center">
            <p className="text-gray-400 self-center">Coming soon!</p>
          </div>
        </div>
        <div className="flex w-full px-3 mt-10 max-w-7xl">
          <div className="w-full justify-center text-center max-w-7xl">
            <ViewCounter slug={""} />
          </div>
        </div>
      </div>
    </NavBarLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    console.log(data);

    const frontmatter = {
      ...data,
      date: data.date.toISOString(),
      filename: filename.replace(".mdx", ""),
    };

    return {
      slug: filename.replace(".mdx", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
