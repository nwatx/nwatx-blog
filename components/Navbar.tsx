import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DarkModeButton from "./DarkModeButton";
import GithubButton from "./GithubButton";
import NavigationButton from "./NavigationButton";
import NavigationButtonMobile from "./NavigationButtonMobile";

export default function Navbar({ children }) {
	const router = useRouter();
	const [open, setOpen] = useState(false);

	return (
		<div className="min-h-screen flex flex-col">
			<nav
				className={`w-full mt-20 sticky z-10 top-0 px-4 bg-white dark:bg-gray-900
        }`}
			>
				<div className="max-w-3xl mx-auto">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								{/* <img
                  onClick={() => router.push("/")}
                  className="h-8 w-8 cursor-pointer"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}
								{/* <p
									className="text-2xl bg-blue-500 px-2 py-1 rounded-sm text-white dark:text-white cursor-pointer"
									onClick={() => router.push("/")}
								>
									nwatx
								</p> */}
								<h1
									onClick={() => router.push("/")}
									className="text-2xl my-3 font-semibold cursor-pointer"
								>
									Neo Wang
								</h1>
							</div>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-end space-x-2">
								<GithubButton />
								<div className="mx-2"></div>
								{/* <NavigationButton to='https://github.com/nwatx' src='/github.svg' /> */}
								{/* <NavigationButton to="/aboutme" label="About Me" /> */}
								<NavigationButton to="/blog" label="Blog" />
								<NavigationButton to="/notes" label="Notes" />
								{/* <NavigationButton to="/cv" label="CV" /> */}
								{/* <NavigationButton to="/editor" label="Editor" /> */}
							</div>
						</div>
						<div className="-mr-2 flex md:hidden">
							<button
								onClick={() => setOpen(!open)}
								type="button"
								className="`shadow:md inline-flex items-center justify-center p-2 rounded-md hover:shadow-md focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-100 text-black dark:text-white focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<svg
									className="hidden h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
					{/* <div className="flex w-full justify-between border-b" /> */}
					{/* <div className="flex w-1/12 border-black border-box border-b dark:border-white"></div> */}
					{/* <div className="flex w-1/12 border-black border-box border-b dark:border-white"></div> */}
					{/* {/* </div> */}
				</div>

				{open && (
					<div className="md:hidden" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{/* <NavigationButtonMobile to="/aboutme" label="About Me" /> */}
							<NavigationButtonMobile to="/blog" label="Blog" />
							{/* <NavigationButtonMobile to="/robotics" label="Robotics" /> */}
							<NavigationButtonMobile to="/editor" label="Editor" />
						</div>
					</div>
				)}
			</nav>
			<main className="flex flex-1 flex-grow w-full flex-col min-h-0">
				{children}
			</main>
		</div>
	);
}
