import { LinkButton } from "@/components";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const entries = [
  {
    title: "Event Store SQL",
    subtitle: "Why SQL sometimes isn't enough.",
    href: "/blog/event-store-sql",
  },
  {
    title: "Encapsulation",
    subtitle: "Fighting public enemy #1",
    href: "/blog/encapsulation",
  },
];

export default function Entries() {
  return (
    <>
      {entries.map((e) => {
        return (
          <Box flex={"1 0 calc(50% - 8px)"} key={e.href} component={Card}>
            <CardContent>
              <Typography variant="h6">{e.title}</Typography>
              <Typography variant="body1">{e.subtitle}</Typography>
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
                href={e.href}
              >
                Learn more
              </LinkButton>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
