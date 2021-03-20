import NavBarLayout from "../layouts/NavBarLayout";
import fs from "fs";
import matter from "gray-matter";
import BlogPost from "../components/BlogPost";
import Head from "next/head";
import { useEffect, useState } from "react";
import { BlogPostProps, TagColor } from "../components/BlogPost";
import ViewCounter from "../components/ViewCounter";

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
          .map((s) => s);
    })
    .flat();

  const uniquePostTags = Array.from(new Set<string>(postTags))
    .sort()
    .filter((e) => e);

  console.log(filters);

  useEffect(() => {
    setFilters([]);
  }, []);

  return (
    <NavBarLayout>
      <Head>
        <title>Neo Wang - Blog</title>
        <meta
          title="description"
          content="Neo Wang's blog - code, ping pong, and more!"
        />
        <meta
          name="keywords"
          content="nwatx, Neo Wang, Next.js, Next.js blog"
        />
      </Head>
      <div className="flex h-full overflow-auto justify-between w-full flex-col max-w-7xl">
        <div className="flex flex-col max-w-7xl lg:px-4 w-full space-y-5">
          <div className="flex w-full">
            <p className="text-4xl underline">Blog</p>
          </div>
          {/* <div className="flex w-full">
          <p className="text-lg">Tags</p>
        </div> */}
          {posts && (
            <div className="flex w-full flex-row items-baseline space-x-3">
              {uniquePostTags && (
                <div className="flex items-baseline mt-1 mb-2 space-x-3">
                  {uniquePostTags.map((tag) => (
                    <div
                      className={`flex text-xs uppercase flex-row items-center py-1.5 px-2 space-x-3 rounded-full cursor-pointer ${
                        TagColor[tag] ? TagColor[tag][0] : "bg-gray-50"
                      }`}
                      onClick={() => {
                        if (!filters.includes(tag)) {
                          setFilters([...filters, tag]);
                        }
                      }}
                    >
                      <p
                        className={`mt-0 ${TagColor[tag] && TagColor[tag][1]}`}
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
                </div>
              )}
              {filters && (
                <div
                  className={`text-xs h-auto flex items-center ml-3 border-black border py-1.5 px-2 ${
                    filters.length === 0
                      ? "disabled border-gray-300 text-gray-300 cursor-default"
                      : "cursor-pointer"
                  } rounded-full`}
                  onClick={() => setFilters([])}
                >
                  <p style={{ isolation: "isolate" }}>Clear</p>
                </div>
              )}
            </div>
          )}
          <div className="flex flex-col w-full space-y-5">
            {posts &&
              posts
                .filter((p) => {
                  if (filters.length === 0) return true;
                  if (!p.frontmatter.tags && filters.length) return false;
                  return filters.some((filter) =>
                    p.frontmatter.tags.split(",").includes(filter)
                  );
                })
                .map((post) => (
                  <BlogPost
                    key={post.slug}
                    slug={post.slug}
                    {...post.frontmatter}
                  />
                ))}
          </div>
        </div>
        <div className="flex w-full px-3 max-w-7xl">
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

    const frontmatter = {
      ...data,
      // date: formattedDate,
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
