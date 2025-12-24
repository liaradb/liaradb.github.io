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

export const Topic: FC<{ title: string; icon: ReactNode | ReactNode[] }> = ({
  title,
  icon,
}) => {
  return (
    <Card>
      <Box component={CardContent} display="flex" alignItems="center" gap={1}>
        {icon}
        <Typography variant="h5">{title}</Typography>
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
    </Card>
  );
};
