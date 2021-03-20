import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export type BlogPostProps = {
  title: string;
  author: string;
  description: string;
  slug: string;
  tags?: string;
  image?: string;
};

export const TagColor = {
  // cpp: ["bg-red-50", "text-red-600"],
};

export default function BlogPost({
  title,
  slug,
  author,
  description,
  image,
  tags,
}: BlogPostProps) {
  return (
    <Link href={`/post/${slug}`}>
      <div className="flex w-full justify-between py-7 px-10 rounded-lg shadow-sm cursor-pointer hover:shadow-inner antialiased">
        <div className="flex flex-col w-full">
          <div className='flex flex-col sm:flex-row'>
            <p className="text-3xl text-gray-800">{title}</p>
            {author && (
              <div className='mx-1 flex h-full w-full sm:w-auto'>
                <p className="text-md text-gray-600 self-end font-light">by <b className=''>{author}</b></p>
              </div>
            )}
          </div>
          {tags && (
            <div className="flex items-baseline w-full mt-1 mb-2 space-x-3">
              {tags.split(",").map((tag) => (
                <div
                  key={tag}
                  className={`rounded-full ${
                    TagColor[tag] && TagColor[tag][0]
                  }`}
                >
                  <p
                    className={`uppercase m-0 text-xs py-1 px-2 ${
                      TagColor[tag] && TagColor[tag][1]
                    }`}
                  >
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div>
            <p className="text-md text-gray-800">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full">
          <p className="text-3xl font-extralight animate-pulse">{">"}</p>
        </div>
      </div>
    </Link>
  );
}
