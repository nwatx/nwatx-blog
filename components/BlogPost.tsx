import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TagColor } from "./TagColors";

export type BlogPostProps = {
  title: string;
  author: string;
  description: string;
  slug: string;
  date: Date;
  tags?: string;
  image?: string;
};

export default function BlogPost({
  title,
  slug,
  author,
  description,
  date,
  image,
  tags,
}: BlogPostProps) {
  return (
    <Link href={`/post/${slug}`}>
      <div className="flex w-full justify-between py-7 px-10 rounded-lg shadow-sm cursor-pointer hover:shadow-inner antialiased dark:border-b dark:border-gray-600 dark:hover:bg-gray-700">
        <div className="flex flex-col space-y-2 w-full">
          {tags && (
            <div className="flex items-baseline w-full mt-1 mb-2 space-x-3">
              {tags.split(",").sort().map((tag) => (
                <div
                  key={tag}
                  className={`rounded-md dark:bg-gray-700 dark:text-white ${
                    TagColor[tag] && TagColor[tag][0]
                  }`}
                >
                  <p
                    className={`uppercase m-0 text-xs dark:text-white py-1 px-2 ${
                      TagColor[tag] && TagColor[tag][1]
                    }`}
                  >
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className='flex flex-col sm:flex-row'>
            <p className="text-3xl text-gray-800 dark:text-gray-100">{title}</p>
            {author && (
              <div className='mx-1 flex h-full w-full sm:w-auto'>
                <p className="text-md text-gray-600 dark:text-gray-400 self-end font-light">by <b className=''>{author}</b> on <b>{date && new Date(date).toLocaleDateString()}</b></p>
              </div>
            )}
          </div>
          <div>
            <p className="text-md text-gray-800 dark:text-gray-200">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center min-h-full">
          <p className="text-3xl font-light animate-pulse">{">"}</p>
        </div>
      </div>
    </Link>
  );
}
