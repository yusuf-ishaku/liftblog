import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_blog/post/$postId")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello &quot;/_blog/post/$postId&quot;!</div>;
}
