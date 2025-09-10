import BlogGrid from "@/components/blog/blog-grid";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mb-[228px]">
      <h2 className="text-[48px] leading-[60px] font-medium text-white">
        Blogs
      </h2>
      <BlogGrid />
    </div>
  );
}
