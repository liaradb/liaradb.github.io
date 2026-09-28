import { FC } from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

import { LinkButton } from "@/components";

export const BlogItem: FC<{
  date: Date | undefined;
  href: string;
  subtitle: string | undefined;
  title: string;
}> = ({ date, href, title, subtitle }) => {
  return (
    <Box flex={"1 0 calc(50% - 8px)"} key={href} component={Card}>
      <Header />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
        <Typography variant="body2">{date?.toLocaleDateString()}</Typography>
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
