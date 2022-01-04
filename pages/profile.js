import Meta from "../components/meta";
import Header from "../components/header";
import ProfileSection from "../components/profileSection";
import WatchListSection from "../components/watchListSection";

export default function Home() {
  return (
    <>
      <Meta title="BNCC x tiket Movies" desc="Lorem ipsum" />
      <Header />
      <ProfileSection />
      <WatchListSection />
    </>
  );
}
