import { Handlers, PageProps } from "$fresh/server.ts";
import * as gfm from "$gfm";
import { Container } from "../../components/Container.tsx";
import { loadPost, Post } from "../../utils/posts.ts";
import {Header} from "../../components/Header.tsx";

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
      <Header/>
      <Container>
        <h1 class="font-bold text-5xl pt-20">{post.title}</h1>
        <time class="inline-block mt-4">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <style dangerouslySetInnerHTML={{ __html: gfm.CSS }} />
        <article
          class="mt-12 markdown-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </>
  );
}
