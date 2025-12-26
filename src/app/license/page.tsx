import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

const title = "License";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return <AppPage title={title}></AppPage>;
}
