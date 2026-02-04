import { useEffect } from "react";
import HaveQuestionAbout from "../components/HaveQuestionAbout";
import HeroSectionAbout from "../components/HeroSectionAbout";
import MissionAbout from "../components/MissionAbout";
import TraksHome from "../components/TraksHome";
import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <HeroSectionAbout />
      <MissionAbout />
      <HaveQuestionAbout />
      <TraksHome />
    </>
  );
}
