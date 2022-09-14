import { Handlers, PageProps } from "$fresh/server.ts";
import { listPosts, Post } from "../utils/posts.ts";
import { State } from "../utils/state.ts";

interface Data extends State {
  posts: Post[];
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const posts = await listPosts();
    return ctx.render({ ...ctx.state, posts });
  },
};

export default function Home(props: PageProps<Data>) {
  const { posts } = props.data;
  return (
    <div class="px-4 mx-auto max-w-screen-md">
      <h1 class="font-bold text-5xl mt-12">Fresh Blog</h1>
      <ul class="mt-8">
        {posts.map((post) => <PostEntry post={post} />)}
      </ul>
    </div>
  );
}

function PostEntry(props: { post: Post }) {
  const { post } = props;
  return (
    <li class="border-t">
      <a href={`/blog/${post.slug}`} class="py-2 flex group gap-4">
        <div>{post.publishedAt.toDateString()}</div>
        <div>
          <h2 class="font-bold group-hover:underline">{post.title}</h2>
        </div>
      </a>
    </li>
  );
}