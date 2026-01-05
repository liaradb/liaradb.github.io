import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import UseCases from "./use-cases.mdx";

const title = "Use cases";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <UseCases />
    </AppPage>
  );
}
