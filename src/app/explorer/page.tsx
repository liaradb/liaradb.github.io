import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import Explorer from "./explorer.mdx";

const title = "LiaraDB Explorer";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage
      title={title}
      subTitle="VSCode Extension for managing your instances"
    >
      <div>
        <Explorer />
      </div>
    </AppPage>
  );
}
