import authorImg from "@/assets/images/author.png";
import blogImg from "@/assets/images/blogimg.png";
import type { BlogPost } from "@/types";

export const blogPostMocks = Array.from({ length: 12 }).fill({
  author: {
    name: "Fortune Yusuf",
    image: authorImg,
  },
  date: "21/08/25",
  image: blogImg,
  title: "Why African SME’s must Embrace Digital Transformation in 2025",
}) as BlogPost[];
