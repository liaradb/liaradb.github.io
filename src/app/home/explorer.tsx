import { Terminal } from "@mui/icons-material";
import { Topic } from "./topic";

export const Explorer = () => {
  return (
    <Topic
      title="LiaraDB Explorer"
      icon={<Terminal />}
      items={["VSCode Extension", "Manage your instances", "Query your data"]}
      href="/explorer"
    />
  );
};
