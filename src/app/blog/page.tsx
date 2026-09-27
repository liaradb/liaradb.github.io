import { AppPage } from "@/components";

import { Entries } from "./entries";

export default async function Page({ params }: { params: Promise<{}> }) {
  return (
    <AppPage title="Blog">
      <Entries />
    </AppPage>
  );
}
