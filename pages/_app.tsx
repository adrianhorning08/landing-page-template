import "../styles/globals.scss";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });
    // eslint-disable-next-line no-unused-vars
    // const sticky = new Sticky("[data-sticky]");
  });

  return <Component {...pageProps} />;
}

export default MyApp;
