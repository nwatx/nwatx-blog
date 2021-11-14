import React from "react";
import Collapser from "react-collapsible";

const DownChevron = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 m-auto"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M19 9l-7 7-7-7"
			/>
		</svg>
	);
};

const UpChevron = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6 m-auto"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 15l7-7 7 7"
			/>
		</svg>
	);
};

export default function Collapsible({ title, opened, children }) {
	const [chevronOpen, setChevronOpen] = React.useState(opened || false);
	return (
		<Collapser
			onOpen={() => setChevronOpen(true)}
			onClose={() => setChevronOpen(false)}
			open={opened}
			transitionTime={100}
			trigger={
				<div className="flex w-full my-2 max-w-7xl justify-left shadow-md rounded-lg px-2">
					<div className="flex flex-end w-full max-w-5xl cursor-pointer">
						<div className="flex flex-col w-6 mr-2 h-full">
							{chevronOpen ? <UpChevron /> : <DownChevron />}
						</div>
						<h3 className="prose my-3 font-bold text-lg text-black dark:text-white">
							{title}
						</h3>
					</div>
				</div>
			}
			triggerClassName="text-2xl font-bold"
		>
			{children}
		</Collapser>
	);
}
