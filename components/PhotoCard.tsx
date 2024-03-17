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

export default function PhotoCard({
	to,
	src,
	alt,
	title,
	description,
	width,
	height,
}: CardProps) {
	return (
		<div className="w-full my-1 flex flex-row rounded-md">
			<div className="w-24 h-24 relative rounded-md">
				{src && (
					<Link href={to}>
						<Image
							className="rounded-lg cursor-pointer"
							layout="fill"
							src={src}
							alt={alt || title}
							// width={width || 300}
							// height={height || 300}
							priority
						/>
					</Link>
				)}
			</div>
			<div className="mt-2">
				<Link href={to}>
					<h1 className="dark:text-white box-border cursor-pointer">
						<b className="border-b border-b-600 border-blue-600 hover:text-blue-600">
							{title}
						</b>
					</h1>
				</Link>
				<p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
			</div>
			{/* <div className="w-full border-b dark:border-gray-800" /> */}
		</div>
	);
}
