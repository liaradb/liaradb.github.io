import { LinkButton } from "@/components";
import { ArrowForward } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

export const Topic: FC<{
  title: string;
  icon: ReactNode | ReactNode[];
  items: string[];
  href: string;
}> = ({ title, icon, items, href }) => {
  return (
    <Box component={Card} display="flex" flexDirection="column" flexGrow={1}>
      <Box component={CardContent} flexGrow={1}>
        <Box display="flex" alignItems="center" gap={1}>
          {icon}
          <Typography variant="h5">{title}</Typography>
        </Box>
        <Box component="ul" margin={2} padding={0}>
          {items.map((item) => (
            <Box component="li" key={item}>
              {item}
            </Box>
          ))}
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
