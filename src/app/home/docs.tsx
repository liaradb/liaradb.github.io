import { Info } from "@mui/icons-material";
import { Topic } from "./topic";

export const Docs = () => {
  return (
    <Topic title="Documentation" icon={<Info />} items={[]} href="/docs" />
  );
};
