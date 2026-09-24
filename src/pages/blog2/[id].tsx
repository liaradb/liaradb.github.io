import { AppPage } from "@/components";
import { getAllPostIds, getPostData, PostData } from "../../lib/posts";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <AppPage title={postData.title} subTitle={postData.subtitle}>
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </AppPage>
  );
}
