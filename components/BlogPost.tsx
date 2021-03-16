import { useRouter } from "next/router";
import React from "react";

type BlogPostProps = {
  title: string;
  author: string;
  description: string;
  slug: string;
  tags?: string;
  image?: string;
};

const tagColor = {
  "cpp": "red"
}

export default function BlogPost({
  title,
  slug,
  author,
  description,
  image,
  tags,
}: BlogPostProps) {
  const router = useRouter();
  return (
    <div className="flex w-full justify-between py-7 px-10 rounded-lg shadow-sm cursor-pointer hover:shadow-inner antialiased">
      <div
        className="flex flex-col w-full"
        onClick={() => router.push(`/post/${slug}`)}
      >
        <div>
          <p className="text-3xl font-bold text-gray-800">{title}</p>
        </div>
        {tags && (
          <div className="flex w-full mt-1 mb-2 space-x-3">
            {tags.split(",").map((tag) => (
              <div className={`inline-block rounded-full bg-${tagColor[tag]}-50 hover:shadow-inner py-1 px-2`}>
                <p className={`uppercase text-xs text-${tagColor[tag]}-600`}>{tag}</p>
              </div>
            ))}
          </div>
        )}
        <div>
          <p className="text-xl font-medium text-gray-500">{author}</p>
        </div>
        <div>
          <p className="text-md text-gray-800">{description}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center h-full">
        <p className="text-3xl font-extralight animate-pulse">{">"}</p>
      </div>
    </div>
  );
}
