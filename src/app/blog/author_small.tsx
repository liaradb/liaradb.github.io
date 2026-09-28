import { FC } from "react";
import { Author as AuthorType } from "./authors";
import { Avatar, Box, Typography } from "@mui/material";

export const AuthorSmall: FC<{ author: AuthorType }> = ({ author }) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
      <AuthorImage author={author} />
      <Box display="flex" flexDirection="column">
        <Typography variant="body1" fontWeight="bold">
          {author.name}
        </Typography>
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
