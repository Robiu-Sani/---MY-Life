import { FaGithub } from "react-icons/fa";

export default function GitHubAuth() {
  const handleGithubAuth = () => {
    console.log("click from github auth");
  };
  return (
    <FaGithub onClick={handleGithubAuth} className="text-4xl cursor-pointer" />
  );
}
