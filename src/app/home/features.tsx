import { Build } from "@mui/icons-material";
import { Topic } from "./topic";

export const Features = () => {
  return (
    <Topic
      title="Features"
      icon={<Build />}
      items={[
        "Event native database",
        "Event-Log and Key-Value storage",
        "Aggregate snapshots",
        "Transactional inserts",
        "Distributed database",
      ]}
      href="/features"
      backgroundColor="hsla(265,96%,27%,0.5)"
    />
  );
};
