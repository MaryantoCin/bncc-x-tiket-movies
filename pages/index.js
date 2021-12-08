import Meta from "../components/meta";
import Header from "../components/header";
import PopularSection from "../components/popularSection";
import SearchSection from "../components/searchSection";

export default function Home() {
  return (
    <>
      <Meta title="BNCC x tiket Movies" desc="Lorem ipsum" />
      <Header />
      <PopularSection />
      <SearchSection />
    </>
  );
}
