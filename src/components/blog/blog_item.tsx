import { FC } from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { LinkButton } from "@/components";

export const BlogItem: FC<{
  title: string;
  subtitle: string;
  href: string;
}> = ({ href, subtitle, title }) => {
  return (
    <Box
      flex={"1 0 calc(50% - 8px)"}
      key={href}
      component={Card}
      minWidth={400}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </CardContent>
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
