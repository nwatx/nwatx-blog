import Link from "next/link";
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
  cpp: ["bg-red-50", "text-red-600"],
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
          <div className='flex flex-row'>
            <p className="text-3xl font-bold text-gray-800">{title}</p>
            {author && (
              <div className='mx-1 flex h-full'>
                <p className="text-md text-gray-600 self-end">by <b className='font-semibold'>{author}</b></p>
              </div>
            )}
          </div>
          {tags && (
            <div className="flex w-full mt-1 mb-2 space-x-3">
              {tags.split(",").map((tag) => (
                <div
                  className={`inline-block rounded-full ${
                    tagColor[tag] && tagColor[tag][0]
                  } py-1 px-2`}
                >
                  <p
                    className={`uppercase text-xs ${
                      tagColor[tag] && tagColor[tag][1]
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
        <div className="flex flex-col justify-center h-full">
          <p className="text-3xl font-extralight animate-pulse">{">"}</p>
        </div>
      </div>
    </Link>
  );
}
