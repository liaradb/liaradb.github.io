import { getSortedPostsData } from "@/lib/posts";
import { BlogItem } from "./blog_item";
import { FC } from "react";

export const Entries: FC<{ max?: number }> = ({ max }) => {
  const posts = getSortedPostsData();
  return posts
    .filter((_, i) => !max || i < max)
    .map((e) => {
      return (
        <BlogItem
          key={e.id}
          date={e.date}
          href={`./blog/${e.id}`}
          title={e.title}
          subtitle={e.subtitle}
        />
      );
    });
};
