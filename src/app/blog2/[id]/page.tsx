import { Metadata, ResolvingMetadata } from "next";

import { AppPage, appTitle } from "@/components";
import { getAllPostIds, getPostData, importMarkdown } from "@/lib/posts";

export async function generateMetadata(
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { id } = await params;
  const { title } = await getPostData(id);

  return {
    title: appTitle(title),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { default: Value } = await importMarkdown(id);
  const postData = await getPostData(id);
  return (
    <AppPage title={postData.title} subTitle={postData.subtitle}>
      {postData.date}
      <br />
      <Value />
    </AppPage>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(({ params }) => params);
}
