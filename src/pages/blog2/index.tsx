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
      {posts.map(({ id, date, title }) => (
        <BlogItem
          key={id}
          href={`./blog2/${id}`}
          title={title}
          subtitle={date}
        />
      ))}
    </AppPage>
  );
};

export default Blog;
