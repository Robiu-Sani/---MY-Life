import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../../RootComponent/context/Context";

export default function GoogleAuth() {
  const { LoginWithGoogle } = useContext(AuthContext);
  const handleGoogleAuth = () => {
    LoginWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <AiFillGoogleCircle
      onClick={handleGoogleAuth}
      className="text-[40px] cursor-pointer"
    />
  );
}
