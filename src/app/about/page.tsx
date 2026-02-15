import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import About from "./about.mdx";

const title = "About";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <div>
        <About />
      </div>
    </AppPage>
  );
}
