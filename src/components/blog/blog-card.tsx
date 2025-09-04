import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { BlogPost } from "@/types";
import { extractNameInitials } from "@/utils/client";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[16px] min-h-[402px]">
        <Avatar className="w-full h-[284px] rounded-[18.3237px]">
          <AvatarImage src={post.image} draggable={false} />
          <AvatarFallback>{post.title}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start gap-[12px]">
          <h3 className="font-medium text-[20px] leading-[25px]">
            {post.title}
          </h3>
          <Separator />
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-[8px]">
              <Avatar>
                <AvatarImage src={post.author.image} draggable={false} />
                <AvatarFallback>
                  {extractNameInitials(post.author.name)}
                </AvatarFallback>
              </Avatar>
              <span className="text-[16px] leading-[20px] dark:text-[#B7B7B7]">
                {post.author.name}
              </span>
            </div>
            <span className="text-[16px] leading-[20px] dark:text-[#B7B7B7]">
              {post.date}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
