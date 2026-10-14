import { Lightbulb } from "@mui/icons-material";

import { ColorOrange } from "@/theme";

import { Topic } from "./topic";

export const EventSourcing = () => {
  return (
    <Topic
      title="Event Sourcing"
      icon={<Lightbulb />}
      items={[
        "Domain Driven Design",
        "Event Sourcing",
        "Simple reporting and analytics",
      ]}
      href="/event-sourcing"
      backgroundColor={ColorOrange}
    />
  );
};
