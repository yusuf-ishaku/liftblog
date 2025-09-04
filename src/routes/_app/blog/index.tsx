import BlogContact from "@/components/blog/blog-contact";
import BlogGrid from "@/components/blog/blog-grid";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2 className="text-[48px] leading-[60px] font-medium text-white">
        Blogs
      </h2>
      <BlogGrid />
      <BlogContact />
    </div>
  );
}
