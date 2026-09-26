import { AppPage, BlogItem } from "@/components";

import { getSortedPostsData } from "@/lib/posts";

export default async function Page({ params }: { params: Promise<{}> }) {
  const posts = getSortedPostsData();
  return (
    <AppPage title="Blog">
      {posts.map((e) => {
        return (
          <BlogItem
            date=""
            href={`./blog2/${e.id}`}
            title={e.title}
            subtitle={e.subtitle}
          />
        );
      })}
    </AppPage>
  );
}
