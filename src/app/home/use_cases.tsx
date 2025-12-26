import { Lightbulb } from "@mui/icons-material";
import { Topic } from "./topic";

export const UseCases = () => {
  return (
    <Topic
      title="Use cases"
      icon={<Lightbulb />}
      items={[
        "Domain Driven Design",
        "Event Sourcing",
        "Simple reporting and analytics",
      ]}
      href="/use-cases"
    />
  );
};
