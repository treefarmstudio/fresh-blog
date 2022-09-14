import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { loadPost, Post } from "../../utils/posts.ts";
import { State } from "../../utils/state.ts";

interface Data extends State {
  post: Post;
}

export const handler: Handlers<Data, State> = {
  async GET(_req, ctx) {
    const post = await loadPost(ctx.params.slug);
    if (!post) {
      return new Response("Post not found", { status: 404 });
    }
    return ctx.render({ ...ctx.state, post });
  },
};

export default function PostPage(props: PageProps<Data>) {
  const { post } = props.data;
  const html = gfm.render(post.content);
  return (
    <div class="px-4 mx-auto max-w-screen-md">
      <p class="text-gray-600 mt-12">{post.publishedAt}</p>
      <h1 class="font-bold text-5xl mt-2">{post.title}</h1>
      <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
      <div
        class="mt-12 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}