import z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const newBlogSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    slug: z.string(),
    excerpt: z.string().max(160).optional(),
    category: z.string().min(1, "Category is required"),
    content: z.string().min(1, "Content is required"),
    tags: z.array(z.string()).optional(),
    coverImage: z
      .instanceof(File)
      .optional()
      .refine(
        (file) => !file || file.size <= MAX_FILE_SIZE,
        "Image must be less than 5MB",
      )
      .refine(
        (file) => !file || file.type.startsWith("image/"),
        "Only images are supported",
      ),
  })
  .transform((blog) => ({
    ...blog,
    slug:
      blog.slug ||
      blog.title
        .toLowerCase()
        .trim()
        .replace(/['"]/g, "") // drop quotes
        .replace(/[^a-z0-9]+/g, "-") // non-alphanumerics -> -
        .replace(/^-+|-+$/g, ""),
  }));
export type BlogForm = z.infer<typeof newBlogSchema>;
