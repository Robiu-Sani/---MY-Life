import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../RootComponent/context/Context";

export default function GitHubAuth() {
  const { LoginWithGitHub } = useContext(AuthContext);
  const handleGithubAuth = () => {
    LoginWithGitHub()
      .then((result) => {
        console.log(result.user);
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <FaGithub onClick={handleGithubAuth} className="text-4xl cursor-pointer" />
  );
}
