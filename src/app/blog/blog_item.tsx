import { FC } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { LinkButton } from "@/components";

import { AuthorSmall } from "./author_small";
import { getAuthor } from "./authors";

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
      key={href}
      component={Card}
    >
      <Header />
      <Box component={CardContent} flexGrow={1}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
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
      <Box
        component={CardActions}
        display="flex"
        alignItems="center"
        justifyContent="end"
        gap={1}
      >
        <LinkButton
          color="info"
          size="medium"
          endIcon={<ArrowForward />}
          href={href}
        >
          Learn more
        </LinkButton>
      </Box>
    </Box>
  );
};

const Header = () => (
  <Box
    sx={{
      width: "100%",
      height: 200,
      backgroundColor: "#000",
    }}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Typography variant="h2" component="span">
      LiaraDB
    </Typography>
  </Box>
);
