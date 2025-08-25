import { getBlogPostBySlug } from "@/functions/blog";
import { createFileRoute } from "@tanstack/react-router";
import { useLoaderData } from "@tanstack/react-router";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const Route = createFileRoute("/_blog/post/$slug")({
  component: RouteComponent,
  loader: ({ params }) =>
    getBlogPostBySlug({
      data: params,
    }),
});

function RouteComponent() {
  const post = useLoaderData({ from: "/_blog/post/$slug" });

  // Setup a read-only Tiptap editor with the content
  const editor = useEditor({
    editable: false,
    extensions: [StarterKit],
    content: post.content, // Prisma stores the Tiptap JSON string
  });

  return (
    <article className="prose mx-auto max-w-3xl py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        By {post.author.name}
        {post.author.image && (
          <img
            src={post.author.image}
            alt={post.author.name}
            className="inline-block w-6 h-6 rounded-full ml-2 align-middle"
          />
        )}
      </p>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="rounded-lg mb-6"
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
  );
}
