import "tailwindcss/tailwind.css";
import "../styles/styles.css";
import "../styles/prism-one-dark.css";
import Darkmode from "darkmode-js";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new Darkmode({
      bottom: "32px", // default: '32px'
      right: "32px", // default: '32px'
      left: "unset", // default: 'unset'
      time: "0.35s", // default: '0.3s'
      mixColor: "#fff", // default: '#fff'
      backgroundColor: "#fff", // default: '#fff'
      buttonColorDark: "#100f2c", // default: '#100f2c'
      buttonColorLight: "#fff", // default: '#fff'
      saveInCookies: true, // default: true,
      label: "🌓", // default: ''
      autoMatchOsTheme: true, // default: true,
    }).showWidget();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
