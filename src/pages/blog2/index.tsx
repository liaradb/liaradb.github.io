import { Container } from "@mui/material";
import { getSortedPostsData, PostData } from "../../lib/posts";
import { AppPage } from "@/components";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: { allPostsData: PostData[] }) {
  return (
    <AppPage title="Blog">
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <a href={`./blog2/${id}`}>{title}</a>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </AppPage>
  );
}
