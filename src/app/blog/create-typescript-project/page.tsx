import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import CreateTypescriptProject from "./create-typescript-project.mdx";

const title = "Event Store SQL";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title} subTitle="Why sometimes SQL isn't enough.">
      <div>
        <CreateTypescriptProject />
      </div>
    </AppPage>
  );
}
