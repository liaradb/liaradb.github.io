import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";

import EventStore from "./event_store_sql.mdx";

const title = "Event Store SQL";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return (
    <AppPage title={title}>
      <div>
        <EventStore />
      </div>
    </AppPage>
  );
}
