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

export const BlogItem: FC<{
  date: Date | undefined;
  href: string;
  subtitle: string | undefined;
  title: string;
}> = ({ date, href, title, subtitle }) => {
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
      </Box>
      <Box
        component={CardActions}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
      >
        {date && (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="end"
            justifyContent="end"
          >
            <Chip label={date.toLocaleDateString()} variant="outlined" />
          </Box>
        )}
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
