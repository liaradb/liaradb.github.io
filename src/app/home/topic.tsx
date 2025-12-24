import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC, ReactNode } from "react";

export const Topic: FC<{
  title: string;
  icon: ReactNode | ReactNode[];
  items: string[];
}> = ({ title, icon, items }) => {
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
        <Button color="info" size="medium" endIcon={<ArrowForward />}>
          Learn More
        </Button>
      </Box>
    </Box>
  );
};
