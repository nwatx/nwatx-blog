import { useRouter } from "next/router";
import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import NavigationButtonMobile from "./NavigationButtonMobile";

export default function Navbar({ children }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full min-w-full h-screen justify-items-start overflow-hidden">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <img
                  onClick={() => router.push("/")}
                  className="h-8 w-8 cursor-pointer"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                /> */}
                <p
                  className="text-xl cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  nwatx
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavigationButton to="/aboutme" label="About Me" />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="bg-gray-200 shadow:md inline-flex items-center justify-center p-2 rounded-md text-black hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
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
            <div className="flex w-full justify-between">
              <div className="flex w-1/12 border-black border-box border-b"></div>
              <div className="flex w-1/12 border-black border-box border-b"></div>
            </div>
        </div>

        {open && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavigationButtonMobile to="/tutorial" label="Tutorial" />
            </div>
          </div>
        )}
      </nav>
      <div className="flex w-full flex-col min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
