import { Box } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Example = () => {
  return (
    <Box
      sx={{
        "& > pre": {
          background: "none !important",
          margin: 0,
          padding: "0 !important",
        },
      }}
      padding={2}
    >
      <SyntaxHighlighter style={{ ...a11yDark }}>
        {handleEvents.toString()}
      </SyntaxHighlighter>
    </Box>
  );
};

async function getEvents(id: string) {
  console.log(id);
  return [];
}

async function handleEvents(id: string) {
  const events = await getEvents(id);

  events.reduce((prev, event) => {
    return {
      ...prev,
      // ... apply events
      event,
    };
  }, {});
}
