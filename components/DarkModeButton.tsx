import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const DarkModeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	return (
		<div
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className={`${
				mounted && theme === "dark"
					? "shadow-inner cursor-default text-gray-300"
					: " text-gray-700 hover:shadow-inner"
			} rounded-md fixed z-50 self-center p-3 cursor-pointer ${
				!(theme === "light") ? "bg-gray-100" : "bg-gray-700"
			} text-sm bottom-4 md:bottom-6 right-4 md:right-10`}
		>
			🌓
		</div>
	);
};

export default DarkModeButton;
