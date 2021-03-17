import React from "react";
import Navbar from "../components/Navbar";

export default function NavBarLayout({ children }) {
  return (
    <Navbar>
      <div className="flex flex-shrink overflow-auto min-h-0 w-full justify-center">
        <div className="flex w-full flex-row mt-5 pb-10 px-3 lg:px-4 justify-center">
          {children}
        </div>
      </div>
    </Navbar>
  );
}
