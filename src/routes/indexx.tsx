import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirectUsers } from "@/functions/auth";
import { authClient } from "@/lib/auth-client";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";

export const Route = createFileRoute("/indexx")({
  component: App,
  beforeLoad: () => redirectUsers(),
});

const posts = [
  {
    id: 1,
    title: "Introducing Our New Platform",
    excerpt:
      "We’re excited to share the first look at our company blog, where we’ll talk about product updates, industry insights, and behind-the-scenes stories.",
    image: "https://placehold.co/600x400?text=Post+1",
  },
  {
    id: 2,
    title: "How We Built Our Demo",
    excerpt:
      "A peek into the tools and technologies that power this demo site. Learn about the stack and why we chose it.",
    image: "https://placehold.co/600x400?text=Post+2",
  },
  {
    id: 3,
    title: "What’s Next?",
    excerpt:
      "Stay tuned for upcoming features and announcements. This blog will be your go-to place for everything we’re working on.",
    image: "https://placehold.co/600x400?text=Post+3",
  },
];

const toastId = "login-toast";

function App() {
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/editor",
      });
      if (error) throw error;
    },
    onMutate: () => {
      toast.loading("Signing In", {
        id: toastId,
      });
    },
    onSuccess: () => {
      toast.success("Sign in successful", {
        id: toastId,
      });
    },
    onError: (error) => {
      toast.error(`Failed to sign in: ${error.message}`, {
        id: toastId,
      });
    },
  });
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tight">Company Blog</h1>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => mutate()}
          disabled={isPending}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Login with GitHub
        </Button>
      </header>

      {/* Hero Section */}
      <section className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight">Welcome</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Welcome to our demo blog! Here we share updates, insights, and stories
          about our work and ideas.
        </p>
        <Button size="lg">Subscribe</Button>
      </section>

      {/* Blog Post Grid */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
