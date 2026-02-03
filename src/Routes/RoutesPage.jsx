import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../pages/HomePage";
import BooksPage from "../pages/BooksPage";
import AboutUsPage from "../pages/AboutUsPage";
import WishlistPage from "../pages/wishlistPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import AddCodePage from "../pages/AddCodePage";
import ProfilePage from "../pages/ProfilePage";

export default function RoutesPage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<BooksPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="addcode" element={<AddCodePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </>
  );
}
