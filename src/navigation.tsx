import {
  AutoStories,
  Build,
  Description,
  GppGood,
  Home,
  Info,
  Lightbulb,
  RocketLaunch,
} from "@mui/icons-material";

export const navigation = [
  { title: "LiaraDB", href: "/", icon: <Home /> },
  { title: "About us", href: "/about-us", icon: <Info /> },
  {
    title: "Get started",
    href: "https://docs.liaradb.com/docs/get-started",
    icon: <RocketLaunch />,
  },
  {
    title: "Documentation",
    href: "https://docs.liaradb.com",
    icon: <Description />,
  },
  { title: "Use cases", href: "/use-cases", icon: <Lightbulb /> },
  { title: "Features", href: "/features", icon: <Build /> },
  { title: "Blog", href: "/blog", icon: <AutoStories /> },
  { title: "License", href: "/license", icon: <GppGood /> },
];

export const breadcrumb = (part: string) => {
  return breadcrumbMap[part] ?? part;
};

const breadcrumbMap = navigation.reduce(
  (map, item) => {
    map[item.href.substring(1)] = item.title;
    return map;
  },
  {} as Record<string, string>,
);
