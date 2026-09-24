import { getSortedPostsData, PostData } from "../../lib/posts";
import { AppPage } from "@/components";

import { NextPageWithLayout } from "../_app";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const Home: NextPageWithLayout<{ allPostsData: PostData[] }> = ({
  allPostsData,
}) => {
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
};

export default Home;
