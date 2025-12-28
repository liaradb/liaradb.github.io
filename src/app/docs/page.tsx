import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import Docs from "./docs.mdx";

const title = "Docs";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <div>
        <Docs />
      </div>
    </AppPage>
  );
}
