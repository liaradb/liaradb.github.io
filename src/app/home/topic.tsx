import { ArrowForward } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC } from "react";

export const Topic: FC<{ title: string }> = ({ title }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
      </CardContent>
      <CardActions>
        <Button color="info" size="medium" endIcon={<ArrowForward />}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
