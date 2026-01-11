import { getAllPostIds, getPostData, PostData } from "../../lib/posts";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = getPostData(params.id);
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
    <main>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </main>
  );
}
