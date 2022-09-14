import { site } from "../data/site.ts";

export function Header() {
  return (
    <header class="px-3 py-3 bg-yellow-200 h-16 flex items-center">
      <div class="px-4 max-w-screen-md">
        <a href="/" class="text-2xl font-bold hover:text-underline">
          {site.title}
        </a>
      </div>
    </header>
  );
}
