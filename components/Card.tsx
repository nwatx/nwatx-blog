import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
	to: string;
	src: string;
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
			<div className="w-full cursor-pointer md:w-1/2 flex flex-col border dark:border-gray-800 rounded-md shadow-sm hover:shadow-md dark:hover:bg-gray-700">
				<Image
					className="rounded-t-lg"
					layout="responsive"
					src={src}
					alt={alt || title}
					width={width || 300}
					height={height || 300}
					priority
				/>
				<div className="w-full border-b dark:border-gray-800" />
				<div className="m-3">
					<h1 className="text-xl dark:text-white">{title}</h1>
					<p className='text-gray-600 dark:text-gray-300'>{description}</p>
				</div>
			</div>
		</Link>
	);
}
