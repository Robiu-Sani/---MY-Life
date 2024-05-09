import { useContext } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AuthContext } from "../../../RootComponent/context/Context";
export default function TwitorAuth() {
  const { LoginWithTwitter } = useContext(AuthContext);
  const handleTwiterAuth = () => {
    LoginWithTwitter()
      .then((result) => console.log(result.user))
      .then((err) => console.log(err));
  };
  return (
    <FaSquareXTwitter
      onClick={handleTwiterAuth}
      className="text-4xl cursor-pointer"
    />
  );
}
