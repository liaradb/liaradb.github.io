import { FC } from "react";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";

import { AuthorSmall } from "./author_small";
import { getAuthor } from "./authors";
import { Header } from "./header";
import { LinkCardActionArea } from "./link_card_action_area";

export const BlogItem: FC<{
  date: Date | undefined;
  href: string;
  subtitle: string | undefined;
  title: string;
  author: string | undefined;
}> = ({ date, href, title, subtitle, author: authorId }) => {
  const author = getAuthor(authorId);

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={"1 0 calc(50% - 8px)"}
      component={Card}
    >
      <LinkCardActionArea href={href}>
        <Header />
        <Box
          component={CardContent}
          display="flex"
          flexDirection="column"
          flexGrow={1}
        >
          <Box flexGrow={1}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body1">{subtitle}</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            marginTop={2}
            gap={1}
          >
            {author && <AuthorSmall author={author} />}
            {date && (
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="end"
                flexGrow={1}
              >
                <Chip label={date.toLocaleDateString()} variant="outlined" />
              </Box>
            )}
          </Box>
        </Box>
      </LinkCardActionArea>
    </Box>
  );
};
