import "../styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { UserProvider } from "../context/UserProvider";


export function reportWebVitals(metric: NextWebVitalsMetric) {
  const body = JSON.stringify(metric);
  console.log(body);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <UserProvider >
        <Component {...pageProps} />
      </UserProvider>
    </NextUIProvider>
  );
}

export default MyApp;
