import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Editor, useEditorState } from "@tiptap/react";
import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCode,
  FaEraser,
  FaHighlighter,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaParagraph,
  FaQuoteRight,
  FaRedo,
  FaStrikethrough,
  FaSubscript,
  FaSuperscript,
  FaTable,
  FaTasks,
  FaTint,
  FaUnderline,
  FaUndo,
  FaVideo,
} from "react-icons/fa";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import { Button } from "../ui/button";

const headings = [
  {
    level: 1,
    icon: LuHeading1,
  },
  {
    level: 2,
    icon: LuHeading2,
  },
  {
    level: 3,
    icon: LuHeading3,
  },
  {
    level: 4,
    icon: LuHeading4,
  },
  {
    level: 5,
    icon: LuHeading5,
  },
  {
    level: 6,
    icon: LuHeading6,
  },
] as const;

export function TiptapMenu({ editor }: { editor: Editor }) {
  const state = useEditorState({
    editor,
    selector: (ctx) => ({
      isBold: ctx.editor.isActive("bold"),
      canBold: ctx.editor.can().chain().toggleBold().run(),
      isItalic: ctx.editor.isActive("italic"),
      canItalic: ctx.editor.can().chain().toggleItalic().run(),
      isStrike: ctx.editor.isActive("strike"),
      canStrike: ctx.editor.can().chain().toggleStrike().run(),
      isCode: ctx.editor.isActive("code"),
      canCode: ctx.editor.can().chain().toggleCode().run(),
      isUnderline: ctx.editor.isActive("underline"),
      canUnderline: ctx.editor.can().chain().toggleUnderline().run(),
      isParagraph: ctx.editor.isActive("paragraph"),
      isHeading1: ctx.editor.isActive("heading", { level: 1 }),
      isHeading2: ctx.editor.isActive("heading", { level: 2 }),
      isHeading3: ctx.editor.isActive("heading", { level: 3 }),
      isHeading4: ctx.editor.isActive("heading", { level: 4 }),
      isHeading5: ctx.editor.isActive("heading", { level: 5 }),
      isHeading6: ctx.editor.isActive("heading", { level: 6 }),
      isBulletList: ctx.editor.isActive("bulletList"),
      isOrderedList: ctx.editor.isActive("orderedList"),
      isBlockquote: ctx.editor.isActive("blockquote"),
      textAlign: ctx.editor.getAttributes("paragraph").textAlign || "left",
      canUndo: ctx.editor.can().chain().undo().run(),
      canRedo: ctx.editor.can().chain().redo().run(),
      isTaskList: ctx.editor.isActive("taskList"),
      isSubscript: ctx.editor.isActive("subscript"),
      isSuperscript: ctx.editor.isActive("superscript"),
      hasLink: ctx.editor.isActive("link"),
    }),
  });

  if (!editor) return null;

  return (
    <Tabs defaultValue="formatting" className="mb-2">
      <TabsList>
        <TabsTrigger value="formatting">Formatting</TabsTrigger>
        <TabsTrigger value="blocks">Blocks</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="actions">Actions</TabsTrigger>
      </TabsList>

      {/* Inline Formatting */}
      <TabsContent value="formatting" className="flex flex-wrap gap-2 mt-2">
        <Button
          type="button"
          size="icon"
          variant={state.isBold ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!state.canBold}
          title="Bold"
        >
          <FaBold />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isItalic ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!state.canItalic}
          title="Italic"
        >
          <FaItalic />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isStrike ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!state.canStrike}
          title="Strikethrough"
        >
          <FaStrikethrough />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isUnderline ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          title="Underline"
        >
          <FaUnderline />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isCode ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!state.canCode}
          title="Code"
        >
          <FaCode />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isSubscript ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          title="Subscript"
        >
          <FaSubscript />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isSuperscript ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          title="Superscript"
        >
          <FaSuperscript />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={() => {
            const color = prompt("Enter text color (hex or name)");
            if (color) editor.chain().focus().setColor(color).run();
          }}
          title="Text Color"
        >
          <FaTint />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={() => {
            const color = prompt("Enter highlight color (hex or name)");
            if (color) editor.chain().focus().toggleHighlight({ color }).run();
          }}
          title="Highlight"
        >
          <FaHighlighter />
        </Button>
      </TabsContent>

      {/* Blocks */}
      <TabsContent value="blocks" className="flex flex-wrap gap-2 mt-2">
        <Button
          type="button"
          size="icon"
          variant={state.isParagraph ? "default" : "outline"}
          onClick={() => editor.chain().focus().setParagraph().run()}
          title="Paragraph"
        >
          <FaParagraph />
        </Button>

        {headings.map(({ level, icon: Icon }) => (
          <Button
            type="button"
            key={level}
            size="icon"
            variant={state[`isHeading${level}`] ? "default" : "outline"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            title={`Heading ${level}`}
            className="gap-x-1"
          >
            <Icon className="size-5" />
          </Button>
        ))}

        <Button
          type="button"
          size="icon"
          variant={state.isBulletList ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          title="Bullet List"
        >
          <FaListUl />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isOrderedList ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          title="Numbered List"
        >
          <FaListOl />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isBlockquote ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          title="Blockquote"
        >
          <FaQuoteRight />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.isTaskList ? "default" : "outline"}
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          title="Task List"
        >
          <FaTasks />
        </Button>

        {/* Text alignment */}
        {(["left", "center", "right", "justify"] as const).map((align) => (
          <Button
            key={align}
            type="button"
            size="icon"
            variant={state.textAlign === align ? "default" : "outline"}
            onClick={() => editor.chain().focus().setTextAlign(align).run()}
            title={`Align ${align}`}
          >
            {
              {
                left: <FaAlignLeft />,
                center: <FaAlignCenter />,
                right: <FaAlignRight />,
                justify: <FaAlignJustify />,
              }[align]
            }
          </Button>
        ))}
      </TabsContent>

      {/* Media */}
      <TabsContent value="media" className="flex flex-wrap gap-2 mt-2">
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={() => {
            const url = prompt("Enter image URL");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
          title="Add Image"
        >
          <FaImage />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={() => {
            const url = prompt("Enter YouTube URL");
            if (url)
              editor.commands.setYoutubeVideo({
                src: url,
                width: 640,
                height: 480,
              });
          }}
          title="Add YouTube Video"
        >
          <FaVideo />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={() => {
            editor.chain().focus().insertTable({ rows: 3, cols: 3 }).run();
          }}
          title="Insert Table"
        >
          <FaTable />
        </Button>
        <Button
          type="button"
          size="icon"
          variant={state.hasLink ? "default" : "outline"}
          onClick={() => {
            const href = prompt("Enter link URL");
            if (href) editor.chain().focus().setLink({ href }).run();
          }}
          title="Add Link"
        >
          <FaLink />
        </Button>
      </TabsContent>

      {/* Actions */}
      <TabsContent value="actions" className="flex flex-wrap gap-2 mt-2">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!state.canUndo}
          title="Undo"
        >
          <FaUndo />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!state.canRedo}
          title="Redo"
        >
          <FaRedo />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
          title="Clear Formatting"
        >
          <FaEraser />
        </Button>
      </TabsContent>
    </Tabs>
  );
}
