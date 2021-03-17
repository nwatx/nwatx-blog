import NavBarLayout from "../layouts/NavBarLayout";
import fs from "fs";
import matter from "gray-matter";
import BlogPost from "../components/BlogPost";
import Head from "next/head";

type PostData = {
  author: string;
  description: string;
  title: string;
};

type Post = {
  slug;
  frontmatter: PostData;
};

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  console.log(posts); // show graymatter data
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
      <div className="flex flex-col w-full 2xl:w-1/2 space-y-5">
        <div className="flex w-full">
          <p className="text-4xl underline">Blog</p>
        </div>
        {posts &&
          posts.map((post) => (
            <BlogPost key={post.slug} slug={post.slug} {...post.frontmatter} />
          ))}
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

    // Convert post date to format: Month day, Year
    // const options = { year: "numeric", month: "long", day: "numeric" };
    // const formattedDate = data.date.toLocaleDateString("en-US", options);

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
