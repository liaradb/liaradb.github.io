"use client";

import React, { FC, SyntheticEvent } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Example } from "./example";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function ExampleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabHeader value={value} handleChange={handleChange} />
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Example />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Example />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}

const TabHeader: FC<{
  value: number;
  handleChange: (event: SyntheticEvent, newValue: number) => void;
}> = ({ value, handleChange }) => {
  return (
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="Go" {...a11yProps(0)} />
      <Tab label="TypeScript" {...a11yProps(1)} />
      {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
    </Tabs>
  );
};
