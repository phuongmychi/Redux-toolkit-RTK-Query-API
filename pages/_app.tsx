import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import "../styles/globals.css";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Provider } from "react-redux";

import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
        {/*<Footer />*/}
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
