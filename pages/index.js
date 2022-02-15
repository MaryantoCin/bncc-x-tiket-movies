import Meta from "../components/meta";
import Header from "../components/header";
import PopularSection from "../components/popularSection";
import SearchSection from "../components/searchSection";
import { api } from "../components/api";
import "redux";
import { connect } from "react-redux";
import Router from "next/router";

import {
  mapStateToProps,
  setSessionId,
  removeSessionId,
  mapDispatchToProps,
} from "../components/redux";

export function Home({ popularMoviesData }) {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
