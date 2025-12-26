import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

const title = "Use cases";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return <AppPage title={title}></AppPage>;
}
