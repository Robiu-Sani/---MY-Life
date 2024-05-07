import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container h-full mx-auto pt-[0px] p-2  pb-5 sm:pt-2 flex justify-center items-center">
      <div className="mb-[60px] flex flex-col justify-center items-center">
        <h1 className="mt-[100px] text-center text-3xl sm:text-5xl md:text-7xl font-bold">
          Your Lifestyle Companion
        </h1>
        <p className="text-center my-8 text-xl sm:text-2xl">
          Streamline your life with notes, calendars, and routines all in one
          place.
        </p>
        <Link
          to={`/services`}
          className="btn w-[200px] mx-auto border-blue-500 text-white bg-blue-500"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
}
