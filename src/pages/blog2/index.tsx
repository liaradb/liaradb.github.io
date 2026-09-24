import { FC } from "react";

import { AppPage, BlogItem } from "@/components";
import { getSortedPostsData, PostData } from "../../lib/posts";

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

const Blog: FC<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <AppPage title="Blog">
      {posts.map(({ date, id, title, subtitle }) => (
        <BlogItem
          key={id}
          href={`./blog2/${id}`}
          title={title}
          subtitle={subtitle}
          date={date}
        />
      ))}
    </AppPage>
  );
};

export default Blog;
