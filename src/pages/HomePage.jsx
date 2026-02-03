import BestSeller from "../components/BestSeller";
import FlashSale from "../components/FlashSale";
import HeroSectionHome from "../components/HeroSectionHome";
import RecomendedForYou from "../components/RecomendedForYou";
import TraksHome from "../components/TraksHome";

export default function HomePage() {
  return (
    <>
      <HeroSectionHome />
      <TraksHome />
      <BestSeller />
      <RecomendedForYou />
      <FlashSale />
    </>
  );
}
