import '../styles/tailwind.css'
import "../styles/styles.css";
import "../styles/prism-one-dark.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return <ThemeProvider attribute='class'>
    <Component {...pageProps} />;
  </ThemeProvider>;
}

export default MyApp;
