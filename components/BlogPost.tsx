import buildUrl from "cloudinary-build-url";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NextImage from "./NextImage";
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
		<div className="cursor-pointer flex flex-row w-full justify-between pl-3 pt-3 pb-5 pr-10 antialiased hover:bg-gray-100 transition-colors duration-300">
			{/* {image && (
				<Link href={`/post/${slug}`}>
					<div className="w-36 mr-10 h-auto cursor-pointer">
						<NextImage
							className="rounded-xl"
							src={buildUrl(image, {
								cloud: {
									cloudName: "dcg5b3jpt",
								},
								transformations: {
									resize: {
										type: "scale",
										width: 500,
										height: 500,
									},
								},
							})}
							noLoader
							width={500}
							height={500}
							alt={title}
						/>
					</div>
				</Link>
			)} */}
			<div className="flex flex-col space-y-2 w-full">
				<Link href={`/post/${slug}`}>
					<div className="flex flex-col">
						<p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
							{title}
						</p>
						{author && (
							<div className="mt-1 flex h-full w-full sm:w-auto">
								<p className="text-md text-gray-600 dark:text-gray-400 self-end font-light">
									by <b className="font-semibold">{author}</b> on{" "}
									<b className="font-semibold">
										{date && new Date(date).toLocaleDateString()}
									</b>
								</p>
							</div>
						)}
				{tags && (
					<div className="flex flex-wrap items-baseline w-full mt-2 mb-3">
						{tags
							.split(",")
							.sort((a, b) => a.trim().localeCompare(b.trim()))
							.map((tag) => (
								<div
									key={tag}
									className={`rounded-full bg-gray-100 pl-2 dark:bg-gray-800 dark:text-white mr-2 ${
										TagColor[tag] && TagColor[tag][0]
									}`}
								>
									<p
										className={`uppercase m-0 text-xs dark:text-white py-1 pr-2 ${
											TagColor[tag] && TagColor[tag][1]
										}`}
									>
										{tag}
									</p>
								</div>
							))}
					</div>
				)}
					</div>
				</Link>
				<div>
					<p className="text-md text-gray-800 dark:text-gray-200">
						{description}
					</p>
				</div>
			</div>
			{/* <div className="flex flex-col justify-center min-h-full">
				<p className="text-3xl font-light animate-pulse">{">"}</p>
			</div> */}
		</div>
	);
}
