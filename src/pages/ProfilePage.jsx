import { useOutletContext } from "react-router-dom";
import HeroSectionProfile from "../components/HeroSectionProfile";
import UpdateInformationProfile from "../components/UpdateInformationProfile";
export default function ProfilePage() {
  const { setUserData } = useOutletContext();

  return (
    <>
      <HeroSectionProfile />
      <UpdateInformationProfile setUserData={setUserData} />
    </>
  );
}
