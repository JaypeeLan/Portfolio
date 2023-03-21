import { Html, Head, Main, NextScript } from "next/document";
import Loader from "@components/Loader";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="globalLoader">
          <Loader />
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
