"use client";

import { useState } from "react";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Build, Home, Info, Lightbulb } from "@mui/icons-material";
import Link from "next/link";

export const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box width={250}>
          <List>
            {links.map((link) => {
              return (
                <ListItem key={link.href} disablePadding>
                  <ListItemButton
                    component={Link}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    <ListItemText>{link.title}</ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

const links = [
  { title: "LiaraDB", href: "/", icon: <Home /> },
  { title: "About us", href: "/about-us" },
  { title: "Get started", href: "/get-started" },
  { title: "Documentation", href: "/docs", icon: <Info /> },
  { title: "Use cases", href: "/use-cases", icon: <Lightbulb /> },
  { title: "Features", href: "/features", icon: <Build /> },
  { title: "Blog", href: "/blog" },
  { title: "License", href: "/license" },
];
