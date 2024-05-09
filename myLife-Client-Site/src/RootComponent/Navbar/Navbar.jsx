import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/Context";
import defaultProfile from "../../images/profile.png";
import ProfileInfo from "./ProfileInfo";
import Them from "./Them";

export default function Navbar() {
  const { LogedUser } = useContext(AuthContext);
  const [CallInfoBox, setCallInfoBox] = useState(false);

  const localNavItem = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/Login"}>LogIn</NavLink>
      </li>
      <li>
        <NavLink to={"/signUp"}>SignUp</NavLink>
      </li>
      <li>
        <Them />
      </li>
    </>
  );

  const LogedNavBar = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/note"}>My Note</NavLink>
      </li>
      <li>
        <NavLink to={"/calender"}>Calender</NavLink>
      </li>
      <li>
        <NavLink to={"/routine"}>My Rotine</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );

  const NavEnd = (
    <div className="navbar-end">
      <Them />
      <div
        onClick={() => setCallInfoBox(!CallInfoBox)}
        className="mx-3 w-[40px] h-[40px] cursor-pointer rounded-full overflow-hidden"
      >
        {CallInfoBox ? <ProfileInfo /> : ""}
        <img
          src={LogedUser ? LogedUser.photoURL : defaultProfile}
          alt="ProfileImage"
          className="w-full h-full"
        />
      </div>
    </div>
  );

  return (
    <div className="navbar relative container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {LogedUser ? LogedNavBar : localNavItem}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl font-bold">
          Life <span className="text-orange-500">Style</span>
        </Link>
      </div>
      <div
        className={`navbar-center hidden lg:flex ${
          LogedUser ? `` : `absolute right-0 top-2`
        }`}
      >
        <ul className="menu menu-horizontal px-1">
          {LogedUser ? LogedNavBar : localNavItem}
        </ul>
      </div>
      {LogedUser ? NavEnd : ""}
    </div>
  );
}
