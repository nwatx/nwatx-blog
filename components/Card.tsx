import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
	to: string;
	src?: string;
	title: string;
	description?: string;
	width?: number;
	height?: number;
	alt?: string;
};

export default function Card({
	to,
	src,
	alt,
	title,
	description,
	width,
	height,
}: CardProps) {
	return (
		<Link href={to}>
			<div className="w-full mx-2 cursor-pointer flex flex-row dark:border-gray-800 rounded-md md:w-1/2 dark:hover:bg-gray-700">
				<div className="w-24 h-24 relative rounded-md">
					{src && (
						<Image
							className="rounded-lg"
							layout="fill"
							src={src}
							alt={alt || title}
							// width={width || 300}
							// height={height || 300}
							priority
						/>
					)}
				</div>
				<div className="ml-6 mr-2 mt-2">
					<h1 className="dark:text-white box-border ">
						<b className="border-b border-b-600 border-blue-600 hover:text-blue-600">
							{title}
						</b>
					</h1>
					<p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
				</div>
				{/* <div className="w-full border-b dark:border-gray-800" /> */}
			</div>
		</Link>
	);
}
