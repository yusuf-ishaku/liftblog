import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  // Demo blog posts (replace with real fetched data later)
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

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold tracking-tight">Company Blog</h1>
        <Button variant="outline" asChild>
          <Link to="/login">Login</Link>
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
