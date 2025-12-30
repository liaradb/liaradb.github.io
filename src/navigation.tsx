import { Build, Home, Info, Lightbulb } from "@mui/icons-material";

export const navigation = [
  { title: "LiaraDB", href: "/", icon: <Home /> },
  { title: "About us", href: "/about-us" },
  { title: "Get started", href: "/get-started" },
  { title: "Documentation", href: "/docs", icon: <Info /> },
  { title: "Use cases", href: "/use-cases", icon: <Lightbulb /> },
  { title: "Features", href: "/features", icon: <Build /> },
  { title: "Blog", href: "/blog" },
  { title: "License", href: "/license" },
];

export const breadcrumb = (part: string) => {
  return breadcrumbMap[part] ?? part;
};

const breadcrumbMap = navigation.reduce((map, item) => {
  map[item.href.substring(1)] = item.title;
  return map;
}, {} as Record<string, string>);
