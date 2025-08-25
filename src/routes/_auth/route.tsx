import { redirectUsers } from "@/functions/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => redirectUsers(),
});
