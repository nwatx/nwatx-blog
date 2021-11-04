import "../styles/tailwind.css";
import "../styles/styles.css";
import "../styles/prism-one-dark.css";
import "../styles/embla.css";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
import React from "react";

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	
	React.useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
