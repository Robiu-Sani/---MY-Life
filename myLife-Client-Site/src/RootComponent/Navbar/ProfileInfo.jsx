import { useContext } from "react";
import { AuthContext } from "../context/Context";
import { Link } from "react-router-dom";

export default function ProfileInfo() {
  const { LogOut, LogedUser } = useContext(AuthContext);

  return (
    <div
      className={`w-[250px] flex flex-col fixed z-50 top-[70px] right-8 blurBg p-2 rounded-md`}
    >
      <p className="my-1">{LogedUser.displayName}</p>
      <p className="my-1">{LogedUser.email}</p>
      <Link
        to={`/profile`}
        className="w-full p-2 text-center blurBg rounded-md font-bold mt-2"
      >
        Profile
      </Link>
      <button
        onClick={() => LogOut()}
        className="w-full p-2 text-center blurBg rounded-md font-bold mt-2"
      >
        Log Out
      </button>
    </div>
  );
}
