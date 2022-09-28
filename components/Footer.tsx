import { Container } from "./Container.tsx"
import { site, settings } from "../data/site.ts"
export function Footer(){
  return(
    <footer class="w-full pt-10 pb-4">
      <Container>
      <div class="text-center">
        <p>
          &copy; {new Date().getFullYear()} {site.copyrightName} • <a class="hover:text-underline" href={site.viewSourceUrl}>View Source</a>
        </p>
      </div>
      {/* This is a plug for the creator of this template, you can delete the code or disable it in the site settings */}
      {settings.showLittleSticksPlug && <div>
        <p class="text-center pt-4 flex items-center justify-center">Template by <span class="px-2"><svg fill="none" viewBox="0 0 206 252" height="18px"><path stroke="currentColor" stroke-linecap="round" stroke-width="18.628" d="M10 242.594 135.02 10M196.519 242.595 71.499 10"></path></svg></span><a class="hover:text-underline" href="https://littlesticks.dev" target="_blank" rel="noopener">Little Sticks</a></p>
      </div>}
      </Container>
    </footer>
  )
}