import "tailwindcss/tailwind.css";
import '../styles/styles.css';
import '../styles/prism-one-dark.css';
import Darkmode from 'darkmode-js'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    new Darkmode().showWidget();
  },[])

  return <Component {...pageProps} />;
}

export default MyApp;
