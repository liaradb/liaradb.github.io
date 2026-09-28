"use client";

import { FC } from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

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
      <CardActionArea
        LinkComponent={Link}
        href={href}
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          alignItems: "stretch",
        }}
      >
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
      </CardActionArea>
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
