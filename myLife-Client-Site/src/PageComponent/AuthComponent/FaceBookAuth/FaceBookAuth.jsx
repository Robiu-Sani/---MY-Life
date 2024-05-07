import { FaFacebook } from "react-icons/fa";
export default function FaceBookAuth() {
  const handleFacebookAuth = () => {
    console.log("click from face book");
  };
  return (
    <FaFacebook
      onClick={handleFacebookAuth}
      className="text-4xl cursor-pointer"
    />
  );
}
