import { blogPostMocks } from "@/mocks/blog-posts";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import BlogCard from "./blog-card";

const tabs = ["All", "Company", "Tutorial", "Product", "Engineering"] as const;

const BlogGrid = () => {
  const [filter, setFilter] = useState<(typeof tabs)[number]>("All");
  return (
    <>
      <div className="mt-[32px] flex items-center gap-[24px]">
        {tabs.map((tab) => (
          <Button
            key={tab}
            onClick={() => setFilter(tab)}
            className="//py-[16px] /px-[33px] [background:linear-gradient(270deg,rgba(0,11,20,0.2)_0%,rgba(1,73,132,0)_100%)] border border-solid border-[#272727] rounded-[30px]"
          >
            <span>{tab}</span>
            {tab === filter && <Check className="text-[#0264B5]" />}
          </Button>
        ))}
      </div>
      <div className="mt-[59px] grid grid-cols-3 items-start gap-y-[48px] gap-x-[40px]">
        {blogPostMocks.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default BlogGrid;
