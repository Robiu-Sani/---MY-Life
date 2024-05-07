import { AiFillGoogleCircle } from "react-icons/ai";

export default function GoogleAuth() {
  const handleGoogleAuth = () => {
    console.log("im click from google auth");
  };
  return (
    <AiFillGoogleCircle
      onClick={handleGoogleAuth}
      className="text-[40px] cursor-pointer"
    />
  );
}
