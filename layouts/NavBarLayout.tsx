import React from "react";
import Navbar from "../components/Navbar";

export default function NavBarLayout({ children }) {
  return (
    <Navbar>
      <div className="flex flex-grow flex-shrink pb-10 overflow-auto min-h-0 w-full justify-center">
        <div className="flex flex-grow flex-row w-auto pt-5 pb-10 px-3 md:px-4 justify-center">
          {children}
        </div>
      </div>
    </Navbar>
  );
}
