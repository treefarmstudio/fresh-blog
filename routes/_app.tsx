import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Fresh Blog</title>
        <link rel="stylesheet" href="/reset.css" />
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <Component />
    </>
  );
}