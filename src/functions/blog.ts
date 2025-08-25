import { getTypesafeRequestHeaders } from "@/helpers/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { newBlogSchema } from "@/schemas";
import { blobToDataURL } from "@/utils/server";
import { redirect } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { zfd } from "zod-form-data";
import { zodValidator } from "@tanstack/zod-adapter";
import z from "zod";

export const publishBlog = createServerFn({ method: "POST" })
  .validator(zodValidator(zfd.formData(newBlogSchema)))
  .handler(async ({ data }) => {
    const session = await auth.api.getSession({
      headers: getTypesafeRequestHeaders(),
    });
    if (!session) throw new Error("Unauthorized!");
    const authorId = session.user.id;
    const { slug } = await prisma.blog.create({
      data: {
        ...data,
        authorId,
        coverImage: data.coverImage
          ? await blobToDataURL(data.coverImage)
          : undefined,
      },
    });
    throw redirect({
      to: "/post/$slug",
      params: {
        slug,
      },
    });
  });

export const getBlogPostBySlug = createServerFn({ method: "POST" })
  .validator(
    zodValidator(
      z.object({
        slug: z.string(),
      }),
    ),
  )
  .handler(async ({ data }) => {
    const { tags, ...result } = await prisma.blog.findUniqueOrThrow({
      where: {
        slug: data.slug,
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });
    return { ...result, tags: tags as undefined | string[] };
  });
