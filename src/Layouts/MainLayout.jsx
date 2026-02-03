import { Outlet, useNavigate } from "react-router-dom";
import { domain } from "../store";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import toast from "react-hot-toast";

export default function MainLayout() {
  const [userData, setUserData] = useState(() =>
    JSON.parse(localStorage.getItem("user")),
  );
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
    let url = domain + "/profile";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setUserData(res.data.data);
      })
      .catch(() => {
        localStorage.clear();
        toast.error("Error Data, please login again");
        navigate("/login");
      });
  }, []);
  return (
    <>
      <Header userData={userData} />
      <main className="w-full">
        <Outlet context={{ userData, setUserData }} />
      </main>
      <Footer />
    </>
  );
}
