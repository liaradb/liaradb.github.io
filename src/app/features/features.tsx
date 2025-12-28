import { FC } from "react";

import { AppPage } from "@/components";

import FeaturesContent from "./features.mdx";

export const Features: FC<{ title: string }> = ({ title }) => {
  return (
    <AppPage title={title} subTitle="Modern solutions to modern problems">
      <div>
        <FeaturesContent />
      </div>
    </AppPage>
  );
};
