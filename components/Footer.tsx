import { Container } from "./Container.tsx"

export function Footer(){
  return(
    <footer class="w-full py-4">
      <Container>
      <div class="text-center">
        <p>
          &copy; {new Date().getFullYear()} Little Sticks
        </p>
      </div>
      </Container>
    </footer>
  )
}