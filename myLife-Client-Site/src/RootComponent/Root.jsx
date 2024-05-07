import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import background from "../images/Background.svg";

export default function Root() {
  return (
    <div>
      <div
        className="min-h-[100vh] customBg w-full overflow-scroll"
        style={{ background: `url(${background})` }}
      >
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
}
