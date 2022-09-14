import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import { site } from "../data/site.ts";

const CSS = `::selection {
  background-color: #000;
  color: #fff;
}
`;

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="theme-color" content="#000" />
        <style>
          {CSS}
        </style>
      </Head>
      <div class="min-h-screen grid grid-cols-1" style="grid-template-rows: auto 1fr auto;">
        <Component />
      <Footer />
      </div>
    </>
  );
}
