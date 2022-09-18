import { Header } from "../components/Header.tsx";

export function ServerCodePage(
  props: { serverCode: number; codeDescription: string },
) {
  return (
    <>
      <Header />
      <section class="w-full flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-6xl md:text-9xl font-extrabold">
            {props.serverCode}
          </h1>

          <p class="p-4 text-2xl md:text-3xl">
            {props.codeDescription}
          </p>

          <p class="p-4">
            <a href="/" class="hover:underline">Back to the Homepage</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default function PageNotFound() {
  return (
    <ServerCodePage
      serverCode={404}
      codeDescription={"We couldn't find the page you're looking for."}
    />
  );
}
