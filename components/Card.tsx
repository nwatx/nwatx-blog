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
			<div className="mt-2">
				<h2 className="dark:text-white box-border cursor-pointer">
					<a href={to}>
						<b className="underline">{title}</b>
					</a>
				</h2>
				<p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
			</div>
			{/* <div className="w-full border-b dark:border-gray-800" /> */}
		</div>
	);
}
