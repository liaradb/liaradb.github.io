import { FC } from "react";
import { Author as AuthorType } from "./authors";
import { Avatar, Box, Typography } from "@mui/material";

export const Author: FC<{ author: AuthorType | undefined }> = ({ author }) => {
  if (!author) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
      <AuthorImage author={author} />
      <Box display="flex" flexDirection="column">
        <Typography variant="body1" fontWeight="bold">
          {author.name}
        </Typography>
        {author.title && (
          <Typography variant="body2">{author.title}</Typography>
        )}
      </Box>
    </Box>
  );
};

const AuthorImage: FC<{ author: AuthorType }> = ({ author }) => {
  if (!author.imageUrl) {
    return null;
  }

  return <Avatar alt={author.name} src={author.imageUrl} />;
};
