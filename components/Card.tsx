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
};

export default function Card({
	to,
	src,
	title,
	description,
	width,
	height,
}: CardProps) {
	return (
		<Link href={to}>
		<div className="w-full cursor-pointer md:w-1/2 flex flex-col border rounded-md shadow-sm hover:shadow-md">
			<Image className='rounded-t-lg' src={src} width={width || 300} height={height || 300} />
			<div className="w-full border-b" />
			<div className="m-3">
				<h1 className="text-xl dark:text-white font-bold">{title}</h1>
				<h3>{description}</h3>
			</div>
		</div></Link>
	);
}
