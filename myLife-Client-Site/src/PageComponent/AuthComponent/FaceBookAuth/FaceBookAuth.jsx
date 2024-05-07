import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../../../RootComponent/context/Context";
export default function FaceBookAuth() {
  const { LoginWithFaceBook } = useContext(AuthContext);
  const handleFacebookAuth = () => {
    LoginWithFaceBook()
      .then((result) => {
        console.log(result.user);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <FaFacebook
      onClick={handleFacebookAuth}
      className="text-4xl cursor-pointer"
    />
  );
}
