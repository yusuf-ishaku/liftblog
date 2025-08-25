import { db } from "@/db";
import { getTypesafeRequestHeaders } from "@/helpers/server";
import { auth } from "@/lib/auth";
import { newBlogSchema } from "@/schemas";
import { createServerFn } from "@tanstack/react-start";
import { zfd } from "zod-form-data";
import { redirect } from "@tanstack/react-router";

export const publishBlog = createServerFn({ method: "POST" })
  .validator((data) => {
    if (!(data instanceof FormData)) throw new Error("Invalid form data");
    return zfd.formData(newBlogSchema).parse(data);
  })
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getTypesafeRequestHeaders(),
    });
    if (!session) throw new Error("Unauthorized!");
    const authorId = session.user.id;
    const { id: postId } = await db
      .insertInto("blog")
      .values({
        authorId,
        content: data.content,
        slug: data.slug,
        category: data.category,
        title: data.title,
        tags: data.tags ? JSON.stringify(data.tags) : undefined,
      })
      .returningAll()
      .executeTakeFirstOrThrow();
    throw redirect({
      to: "/post/$postId",
      params: {
        postId,
      },
    });
  });
