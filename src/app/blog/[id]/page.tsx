import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { AppPage, appTitle } from "@/components";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { getAuthor } from "../authors";
import { Author } from "../author";

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
  const postData = await getPostData(id);

  if (postData.status === "draft") {
    return notFound();
  }

  const author = getAuthor(postData.author);
  return (
    <AppPage
      title={postData.title}
      subTitle={postData.subtitle}
      date={postData.date}
      header={author && <Author author={author} />}
    >
      <postData.Markdown />
    </AppPage>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(({ params }) => params);
}
