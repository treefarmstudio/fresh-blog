import { Post } from "../utils/posts.ts";

export function PostPreview(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t">
      <a href={`/blog/${post.slug}`} class="py-12 flex group gap-4">
        <div>{post.publishedAt.toDateString()}</div>
        <div>
          <h2 class="text-2xl font-bold group-hover:underline">{post.title}</h2>
        </div>
      </a>
    </li>
  );
}
