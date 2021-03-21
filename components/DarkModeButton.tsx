import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`${
        theme === "dark"
          ? "shadow-inner cursor-default text-gray-300"
          : " text-gray-700 hover:shadow-inner cursor-pointer"
      } rounded-md absolute self-center p-3 ${!(theme === 'light') ? 'bg-gray-100' : 'bg-gray-700'} text-sm bottom-10 right-10`}
    >
      🌓
    </div>
  );
};

export default DarkModeButton;
