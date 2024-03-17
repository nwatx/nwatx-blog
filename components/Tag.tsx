import React from "react";
import Link from "next/link";

export default function Tag({ name, className, link }) {
	return (
		<Link href={link}>
			<span
				className={`cursor-pointer inline-flex text-xs leading-5 font-semibold rounded-full ${className}`}
			>
				{name}
			</span>
		</Link>
	);
}
