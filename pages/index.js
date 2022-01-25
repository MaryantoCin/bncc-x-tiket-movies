import Meta from "../components/meta";
import Header from "../components/header";
import PopularSection from "../components/popularSection";
import SearchSection from "../components/searchSection";
import { api } from "../components/api";

export default function Home({ popularMoviesData }) {
  return (
    <>
      <Meta title="BNCC x tiket Movies" desc="Lorem ipsum" />
      <Header />
      <PopularSection popularMoviesData={popularMoviesData} />
      <SearchSection />
    </>
  );
}

export async function getServerSideProps() {
  const popularMoviesData = await api
    .get(`movie/popular`)
    .then((res) => res.data.results);

  if (!popularMoviesData)
    return {
      notFound: true,
    };

  return {
    props: { popularMoviesData },
  };
}
