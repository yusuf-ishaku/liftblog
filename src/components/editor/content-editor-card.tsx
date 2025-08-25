import type { newBlogSchema } from "@/schemas";
import { TextAlign } from "@tiptap/extension-text-align";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { Underline } from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useFormContext } from "react-hook-form";
import type z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Separator } from "../ui/separator";
import { TiptapMenu } from "./tip-tap-menu";
import { memo } from "react";
import Image from "@tiptap/extension-image";
import Youtube from "@tiptap/extension-youtube";
import { Table } from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Link from "@tiptap/extension-link";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import {
  Details,
  DetailsContent,
  DetailsSummary,
} from "@tiptap/extension-details";
import { Placeholder } from "@tiptap/extensions";

const extensions = [
  StarterKit,
  TextStyleKit,
  TextAlign.configure({ types: ["heading", "paragraph"] }),
  Underline,
  Image,
  Youtube,
  Table,
  TableCell,
  TableHeader,
  TableRow,
  Link,
  Color,
  Highlight,
  Subscript,
  Superscript,
  TaskList,
  TaskItem,
  Details.configure({
    persist: true,
    HTMLAttributes: {
      class: "details",
    },
  }),
  DetailsSummary,
  DetailsContent,
  Placeholder.configure({
    includeChildren: true,
    // @ts-expect-error ...
    placeholder: ({ node }) => {
      if (node.type.name === "detailsSummary") {
        return "Summary";
      }
      return null;
    },
  }),
];

/* ---------------- Content Editor ---------------- */
function ContentEditorCardComponent() {
  const form = useFormContext<z.infer<typeof newBlogSchema>>();

  const editor = useEditor({
    extensions,
    content: form.getValues("content"),
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    onUpdate: ({ editor }) => form.setValue("content", editor.getHTML()),
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content *</CardTitle>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="content"
          render={() => (
            <FormItem>
              <FormControl>
                <div className="border rounded p-2">
                  {editor && <TiptapMenu editor={editor} />}
                  <Separator />
                  <EditorContent
                    editor={editor}
                    onClick={(event) => {
                      if (event.target === event.currentTarget) {
                        const element = event.currentTarget.querySelector(
                          "&>*",
                        ) as HTMLDivElement;
                        element.focus();
                      }
                    }}
                    className="min-h-[300px] [&>*]:focus:border-none [&>*]:focus:outline-none px-2 py-3"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
}

export const ContentEditorCard = memo(ContentEditorCardComponent);
