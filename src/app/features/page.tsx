import { Metadata } from "next";

import { appTitle } from "@/components";

import { Features } from "./features";

const title = "Features";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default function Page() {
  return <Features title={title} />;
}
