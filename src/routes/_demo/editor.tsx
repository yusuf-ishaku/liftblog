import { BlogOgPreview } from "@/components/editor/blog-og-preview"; // ✅ import
import { ContentEditorCard } from "@/components/editor/content-editor-card";
import { EditorSidebar } from "@/components/editor/editor-sidebar";
import { PostDetailsCard } from "@/components/editor/post-details-card";
import { Form } from "@/components/ui/form";
import { publishBlog } from "@/functions/blog";
import { newBlogSchema, type BlogForm } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zfd } from "zod-form-data";

export const Route = createFileRoute("/_demo/editor")({
  component: BlogEditor,
});

const toastId = "PUBLISH-TOAST";

function BlogEditor() {
  const form = useForm<BlogForm>({
    resolver: zodResolver(newBlogSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      category: "",
      content: "",
      tags: [],
      coverImage: undefined, // ✅ make sure this exists
    },
  });

  const publishMutation = useMutation({
    mutationFn: async ({ tags, ...values }: BlogForm) => {
      const formData = new FormData();
      for (const key in values) {
        const value = values[key as keyof typeof values];
        if (!value) continue;
        formData.append(key, value);
      }
      tags?.forEach((tag) => formData.append("tags", tag));
      zfd.formData(newBlogSchema).parse(formData);
      await publishBlog({
        data: formData,
      });
    },
    onMutate: () => {
      toast.loading("Publishing post", {
        id: toastId,
        description: "",
      });
    },
    onSuccess: () => {
      toast.success(`Post published!`, {
        id: toastId,
        description: "",
      });
    },
    onError: (error) => {
      toast.error("Failed to publish post", {
        id: toastId,
        description: error.message,
      });
    },
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog Editor</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) =>
            publishMutation.mutate(values),
          )}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <PostDetailsCard />
            <ContentEditorCard />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <EditorSidebar />
            {/* ✅ OG Preview */}
            <BlogOgPreview />
          </div>
        </form>
      </Form>
    </div>
  );
}
