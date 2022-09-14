import type { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
}

export function Container(props: Props) {
  return <div class="px-4 mx-auto max-w-screen-md">{props.children}</div>;
}
