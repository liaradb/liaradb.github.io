import { BlogItem } from "@/components";
import { getSortedPostsData } from "@/lib/posts";

export function Entries() {
  const posts = getSortedPostsData();
  return posts.map((e) => {
    return (
      <BlogItem
        key={e.id}
        date=""
        href={`./blog/${e.id}`}
        title={e.title}
        subtitle={e.subtitle}
      />
    );
  });
}
