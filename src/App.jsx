import { BrowserRouter } from "react-router-dom";
import RoutesPage from "./Routes/RoutesPage";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
    <div className="w-full h-dvh font-open">
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <RoutesPage />
      </BrowserRouter>
      </div>
    </>
  );
}
