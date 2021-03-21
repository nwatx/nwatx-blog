import Head from "next/head";
import React from "react";
import DarkModeButton from "../components/DarkModeButton";
import Navbar from "../components/Navbar";

export default function NavBarLayout({ children }) {
  return (
    <Navbar>
      <div className="flex h-full flex-shrink flex-grow overflow-auto min-h-0 w-full justify-center">
        <div className="flex w-full pb-5 md:pb-2 flex-row mt-5 max-w-7xl px-4 lg:px-4 justify-center">
          {children}
        </div>
      </div>
      <DarkModeButton />
    </Navbar>
  );
}
