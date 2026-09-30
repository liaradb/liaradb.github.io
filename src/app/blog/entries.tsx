import { FC } from "react";
import { Grid } from "@mui/material";

import { getSortedPostsData } from "@/lib/posts";

import { BlogItem } from "./blog_item";

export const Entries: FC<{ max?: number; cols?: 2 | 3 }> = ({
  max,
  cols = 3,
}) => {
  const posts = getSortedPostsData();
  return (
    <Grid container spacing={2}>
      {posts
        .filter((_, i) => !max || i < max)
        .map((e) => {
          return (
            <Grid size={{ xs: 12, md: cols === 2 ? 6 : 4 }} container>
              <BlogItem
                key={e.id}
                date={e.date}
                href={`./blog/${e.id}`}
                title={e.title}
                subtitle={e.subtitle}
                author={e.author}
                image={e.image}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};
