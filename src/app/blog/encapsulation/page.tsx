import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import Encapsulation from "./encapsulation.mdx";

const title = "Encapsulation";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title} subTitle="Fighting public enemy #1">
      <div>
        <Encapsulation />
      </div>
    </AppPage>
  );
}
