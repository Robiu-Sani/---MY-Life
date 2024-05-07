import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import GitHubAuth from "../GitHubAuth.jsx/GitHubAuth";
import FaceBookAuth from "../FaceBookAuth/FaceBookAuth";
import TwitorAuth from "../TwitorAuth/TwitorAuth";
import logPic from "../../../images/login.png";
import { useState } from "react";

export default function SignUp() {
  const [showPAssword, setShowPassWord] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="grid p-2 grid-cols-1 sm:grid-cols-2 gap-3 container pb-[60px] overflow-scroll">
        <div className="col-span-1 rounded-xl sm:col-span-2 blurBg p-3 py-5">
          <h1 className="text-3xl text-center font-bold ">SignUp Form</h1>
          <p className="text-xl text-center mt-3">
            If you don`t have any account, then you can Create an account from
            here!
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full p-10 blurBg rounded-xl"
        >
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 fontstyle"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full input"
              id="name"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  message: "Invalid Name",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 fontstyle"
              htmlFor="image"
            >
              Profile Url
            </label>
            <input
              className="w-full input"
              id="image"
              type="text"
              placeholder="Profile Image Url"
              {...register("image", {
                required: "Image Url is required",
                pattern: {
                  message: "Invalid Image url",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.image.message}
              </p>
            )}
          </div>
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
              className="absolute right-2 top-10 cursor-pointer"
            >
              a
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
            value={`SignUp`}
            className="input bg-blue-600 mt-4 w-full text-white font-bold cursor-pointer"
          />
          <small>
            I have an account{" "}
            <Link to={`/login`} className="underline mb-4 text-blue-500">
              LogIn
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

        <div className="w-full flex justify-center items-center blurBg rounded-xl">
          <img src={logPic} alt="login pic sorce" className="w-[350px]" />
        </div>
      </div>
    </div>
  );
}
