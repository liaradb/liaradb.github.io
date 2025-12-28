import { LinkButton } from "@/components";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function Entries() {
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6">Event Store SQL</Typography>
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
            href={"/blog/event-store-sql"}
          >
            Learn more
          </LinkButton>
        </Box>
      </Card>
    </>
  );
}
