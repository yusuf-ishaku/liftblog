import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { APP_URL } from "@/config";
import { getBlogPostBySlug } from "@/functions/blog";
import { extractNameInitials } from "@/utils/client";
import { createFileRoute, type AnyRouteMatch } from "@tanstack/react-router";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Route = createFileRoute("/_blog/blogx/$slug")({
  component: RouteComponent,
  loader: ({ params }) =>
    getBlogPostBySlug({
      data: params,
    }),
  head: ({ loaderData: post }) => {
    if (!post) return {};
    const optionalMeta: AnyRouteMatch["meta"] = [];
    if (post.coverImage) {
      optionalMeta.push({
        name: "og:image",
        content: post.coverImage,
      });
      optionalMeta.push({
        name: "twitter:image",
        content: post.coverImage,
      });
    }
    if (post.tags) {
      optionalMeta.push({
        name: "article:tag",
        content: post.tags.join(", "),
      });
    }
    if (post.author.image) {
      optionalMeta.push({
        name: "twitter:creator",
        content: post.author.name,
      });
    }
    const title = `${post.title} | Applift Blog`;
    const description = post.excerpt || post.content.slice(0, 160);
    return {
      meta: [
        ...optionalMeta,
        {
          title,
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "og:title",
          content: title,
        },
        {
          name: "og:description",
          content: post.excerpt || post.content.slice(0, 160),
        },
        {
          name: "article:author",
          content: post.author.name,
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        {
          property: "og:url",
          content: `${APP_URL}/blog/${post.slug}`,
        },
      ],
    };
  },
});

function RouteComponent() {
  const post = Route.useLoaderData();

  // Setup a read-only Tiptap editor
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],
    content: post.content,
    immediatelyRender: false,
  });

  return (
    <>
      <article className="prose mx-auto max-w-3xl py-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-6">
          By {post.author.name}
          {post.author.image && (
            <Avatar className="inline-block w-6 h-6 mx-auto rounded-full ml-2 align-middle">
              <AvatarImage src={post.author.image} alt={post.author.name} />
              <AvatarFallback>
                {extractNameInitials(post.author.name)}
              </AvatarFallback>
            </Avatar>
          )}
        </p>

        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="rounded-lg mb-6 mx-auto"
          />
        )}

        <EditorContent editor={editor} />

        {post.tags && (
          <ul className="flex gap-2 mt-6 flex-wrap">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="px-2 py-1 bg-gray-200 rounded text-sm text-gray-700"
              >
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </article>
    </>
  );
}
