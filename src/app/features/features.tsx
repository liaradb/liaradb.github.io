import { AppPage } from "@/components";
import { Box, Divider, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

export const Features: FC<{ title: string }> = ({ title }) => {
  return (
    <AppPage title={title} subTitle="Modern solutions to modern problems">
      <Box>
        <Typography variant="body1">
          Architecture trends are different than they were 25 years ago. Domain
          Driven Design has given way to Microservices and Event Streams, rather
          than large monolithic SQL Databases. There is a simpler way, but our
          infrastructure needs to support it.
        </Typography>
      </Box>

      <Section title="Event-Log storage">
        <Typography variant="body1"></Typography>
      </Section>

      <Section title="Key-Value storage">
        <Typography variant="body1"></Typography>
      </Section>

      <Section title="Aggregate snapshots">
        <Typography variant="body1"></Typography>
      </Section>

      <Section title="Transactional inserts">
        <Typography variant="body1"></Typography>
      </Section>

      <Section title="Distributed database">
        <Typography variant="body1"></Typography>
      </Section>

      <Section title="gRPC based communication">
        <Typography variant="body1"></Typography>
      </Section>
    </AppPage>
  );
};

const Section: FC<{ title: string; children: ReactNode | ReactNode[] }> = ({
  title,
  children,
}) => {
  return (
    <Box>
      <Typography variant="h2">{title}</Typography>
      <Divider />
      {children}
    </Box>
  );
};
