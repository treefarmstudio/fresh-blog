import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { Container } from "../../components/Container.tsx";
import { loadPost, Post } from "../../utils/posts.ts";

interface Data {
  post: Post;
}

export const handler: Handlers<Data> = {
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
    <>
    <header></header>
    <Container>
      <p class="text-gray-600 mt-12">{post.publishedAt}</p>
      <h1 class="font-bold text-5xl mt-2">{post.title}</h1>
      <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
      <div
        class="mt-12 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
    </>
  );
}