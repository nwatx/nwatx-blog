import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PDFViewer } from "../components/PDFViewer";
import Link from "next/link";

export const BookIcon = () => {
	return (
		<div className="h-5 w-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
			</svg>
		</div>
	);
};

export default function Notecard({ url, alt, description = "" }) {
	return (
		<Link href={url}>
			{/* Button */}
			<button
				type="button"
				// className="px-4 py-2 border text-blue-800 font-semibold border-blue-400 hover:border-blue-600 hover:text-blue-600 opacity-60 rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				className="inline-flex w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
			>
				<p className='mr-auto'>
				{alt}

				</p>
			
				<BookIcon />
			</button>
		</Link>
	);
}
