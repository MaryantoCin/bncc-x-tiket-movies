import Meta from "../components/meta";
import Header from "../components/header";
import PopularSection from "../components/popularSection";
import SearchSection from "../components/searchSection";
import "redux";
import { connect } from 'react-redux'
import Router from 'next/router'

import { mapStateToProps, setSessionId, removeSessionId, mapDispatchToProps } from '../components/redux'

export function Home(props) {
  console.log("Home: ");
  console.log(props);
  return (
    <>
      <Meta title="BNCC x tiket Movies" desc="Lorem ipsum" />
      <Header />
      <PopularSection />
      <SearchSection />
    </>
  );
}


export default connect(mapStateToProps, mapDispatchToProps) (Home);