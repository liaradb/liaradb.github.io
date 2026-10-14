import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import EventSourcing from "./event-sourcing.mdx";

const title = "Event Sourcing";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <EventSourcing />
    </AppPage>
  );
}
