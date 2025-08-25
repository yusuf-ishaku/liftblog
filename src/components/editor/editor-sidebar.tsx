import type { BlogForm, newBlogSchema } from "@/schemas";
import { useFormContext } from "react-hook-form";
import type z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Plus, Save, Send, X } from "lucide-react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { memo, useState } from "react";

const categories = [
  "Technology",
  "Product Updates",
  "Company News",
  "Industry Insights",
  "Tutorials",
  "Case Studies",
  "Team Spotlight",
];

function EditorSidebarBase() {
  const form = useFormContext<z.infer<typeof newBlogSchema>>();
  const [newTag, setNewTag] = useState("");

  // Mutations
  const saveDraftMutation = useMutation({
    mutationFn: async (values: BlogForm) => {
      await new Promise((r) => setTimeout(r, 1000));
      return values;
    },
    onSuccess: () => toast("Draft saved"),
    onError: () => toast("Failed to save draft"),
  });

  const publishMutation = useMutation({
    mutationFn: async (values: BlogForm) => {
      await new Promise((r) => setTimeout(r, 1500));
      return values;
    },
    onSuccess: (data) => toast(`Post "${data.title}" published!`),
    onError: () => toast("Failed to publish post"),
  });

  const addTag = () => {
    const tag = newTag.trim();
    if (tag && !form.getValues("tags")?.includes(tag)) {
      form.setValue("tags", [...(form.getValues("tags") || []), tag]);
      setNewTag("");
    }
  };

  const removeTag = (tag: string) => {
    form.setValue(
      "tags",
      form.getValues("tags")?.filter((t) => t !== tag) || [],
    );
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Publish</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            disabled={saveDraftMutation.isPending}
            onClick={() => saveDraftMutation.mutate(form.getValues())}
          >
            <Save className="w-4 h-4 mr-2" />
            {saveDraftMutation.isPending ? "Saving..." : "Save Draft"}
          </Button>

          <Button
            type="submit"
            className="w-full"
            disabled={publishMutation.isPending}
          >
            <Send className="w-4 h-4 mr-2" />
            {publishMutation.isPending ? "Publishing..." : "Publish"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Author & Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author *</FormLabel>
                <FormControl>
                  <Input placeholder="Author name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((cat: string) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-2">
            <Input
              placeholder="Add a tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), addTag())
              }
            />
            <Button variant="outline" size="icon" onClick={addTag}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {form.getValues("tags")?.map((tag: string) => (
              <Badge
                key={tag}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {tag}
                <button onClick={() => removeTag(tag)}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export const EditorSidebar = memo(EditorSidebarBase);
