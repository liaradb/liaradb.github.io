import { Metadata } from "next";

import { AppPage, appTitle } from "@/components";
import { getAllPostIds, getPostData } from "@/lib/posts";

const title = "Event Store SQL";

export const metadata: Metadata = {
  title: appTitle(title),
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);
  return (
    <AppPage title={postData.title} subTitle={postData.subtitle}>
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </AppPage>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(({ params }) => params);
}
