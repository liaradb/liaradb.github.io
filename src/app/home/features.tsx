import { Build } from "@mui/icons-material";
import { Topic } from "./topic";

export const Features = () => {
  return (
    <Topic
      title="Features"
      icon={<Build />}
      items={["Event native database", "Transactional inserts"]}
    />
  );
};
