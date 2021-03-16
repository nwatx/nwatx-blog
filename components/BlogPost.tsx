import { useRouter } from "next/router";
import React from "react";

type BlogPostProps = {
  title: string;
  author: string;
  description: string;
  slug: string;
  image?: string;
};

export default function BlogPost({title, slug, author, description, image}: BlogPostProps) {
    const router = useRouter();
  return <div className='flex flex-col w-full py-7 px-10 border-2 rounded-lg shadow-sm cursor-pointer hover:shadow-md' onClick={() => router.push(`/post/${slug}`)}>
      <div><p className='text-3xl font-bold text-gray-800'>{title}</p></div>
      <div><p className='text-lg font-semibold text-gray-500'>{author}</p></div>
      <div><p>{description}</p></div>
  </div>;
}
