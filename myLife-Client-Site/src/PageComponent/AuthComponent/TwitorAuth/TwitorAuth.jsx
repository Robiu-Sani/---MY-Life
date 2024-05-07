import { FaSquareXTwitter } from "react-icons/fa6";
export default function TwitorAuth() {
  const handleTwiterAuth = () => {
    console.log("click from twiter auth");
  };
  return (
    <FaSquareXTwitter
      onClick={handleTwiterAuth}
      className="text-4xl cursor-pointer"
    />
  );
}
