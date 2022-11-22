import type { AppProps } from "next/app";
import "../styles/globals.css";

// import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Provider } from "react-redux";

import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      {/*<Footer />*/}
    </Provider>
  );
}

export default MyApp;
