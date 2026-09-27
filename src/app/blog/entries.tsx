import { getSortedPostsData } from "@/lib/posts";
import { BlogItem } from "./blog_item";

export function Entries() {
  const posts = getSortedPostsData();
  return posts.map((e) => {
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
}
