import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import GitHubAuth from "../GitHubAuth.jsx/GitHubAuth";
import FaceBookAuth from "../FaceBookAuth/FaceBookAuth";
import TwitorAuth from "../TwitorAuth/TwitorAuth";
import logPic from "../../../images/login.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../RootComponent/context/Context";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function Login() {
  const { LoginUserByEmail, LogedUser, LogOut } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPAssword, setShowPassWord] = useState(false);

  const onSubmit = (data) => {
    LoginUserByEmail(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        reset();
      })
      .then((err) => {
        console.log(err);
      });
  };

  const form = (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-10 blurBg rounded-xl"
    >
      <div className="mb-4">
        <label
          className="block text-sm font-bold mb-2 fontstyle"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full input"
          id="email"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="mb-1 relative">
        <p
          onClick={() => setShowPassWord(!showPAssword)}
          className="absolute right-3 top-11 cursor-pointer"
        >
          {showPAssword ? (
            <FaEye className="text-xl" />
          ) : (
            <FaEyeSlash className="text-xl" />
          )}
        </p>
        <label
          className="block text-sm font-bold mb-2 fontstyle"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full input"
          id="password"
          type={showPAssword ? "text" : "password"}
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            validate: (value) =>
              /^(?=.*?[A-Z])(?=.*?[a-z])/.test(value) ||
              "Password must contain at least one uppercase and one lowercase letter",
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs italic mt-1">
            {errors.password.message}
          </p>
        )}
      </div>
      <input
        type="submit"
        value={`Login`}
        className="input bg-blue-600 mt-4 w-full text-white font-bold cursor-pointer"
      />
      <small>
        I don`t have any account{" "}
        <Link to={`/signUp`} className="underline mb-4 text-blue-500">
          Registration
        </Link>
      </small>
      <div className="flex mb-4 justify-center items-center gap-1">
        <span className="w-full bg-gray-800 h-[1px]"></span>
        <span>or</span>
        <span className="w-full bg-gray-800 h-[1px]"></span>
      </div>
      <div className="flex justify-center items-center gap-5">
        <GoogleAuth />
        <FaceBookAuth />
        <TwitorAuth />
        <GitHubAuth />
      </div>
    </form>
  );

  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="grid p-2 grid-cols-1 sm:grid-cols-2 gap-3 pb-[60px] container">
        <div className="col-span-1 rounded-xl sm:col-span-2 blurBg p-3 py-5">
          <h1 className="text-3xl text-center font-bold ">Login Form</h1>
          <p className="text-xl text-center mt-3">
            If you have any account, then you can login from here!
          </p>
        </div>
        {LogedUser ? (
          <div className="flex justify-center items-center">
            <button onClick={() => LogOut()} className="btn w-[200px]">
              Log Out
            </button>
          </div>
        ) : (
          form
        )}
        <div className="w-full flex justify-center items-center blurBg rounded-xl">
          <img src={logPic} alt="login pic sorce" className="w-[350px]" />
        </div>
      </div>
    </div>
  );
}
