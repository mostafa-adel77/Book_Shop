import bookBookmark from "../assets/images/book-bookmark 1.png";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
        <div className="flex items-center gap-3">
          <img
            onClick={() => navigate("/")}
            className="w-8 hover:cursor-pointer"
            src={bookBookmark}
            alt=""
          />
          <Link to="/" className="font-normal">Bookshop</Link>
        </div>
      <div className="hidden md:flex gap-12">
        <div className="flex items-center gap-10">
          <Link to="/" className="font-semibold text-[18px]">Home</Link>
          <Link to="books" className="font-semibold text-[18px]">Books</Link>
          <Link to="aboutus" className="font-semibold text-[18px]">About Us</Link>
        </div>
      </div>
    </>
  );
}
