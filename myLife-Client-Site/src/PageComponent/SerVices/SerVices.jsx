import {
  FaStickyNote,
  FaCalendarAlt,
  FaClipboardList,
  FaBloggerB,
  FaTools,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SerVices() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex justify-center items-start">
      <div className="p-3 py-5 rounded-xl gap-8 pb-[60px] grid grid-cols-1 md:grid-cols-2 overflow-scroll container">
        <div className="md:col-span-2 col-span-1 w-full blurBg p-2 py-5 rounded-md">
          <div className="flex justify-center items-center flex-wrap my-5 gap-5">
            <FaTools className="text-5xl text-red-500" />
            <h1 className="text-5xl text-center font-bold">Our Services</h1>
          </div>
          <p className=" text-xl text-center max-w-750px">
            Explore our comprehensive range of services tailored to enhance your
            lifestyle and productivity.
          </p>
        </div>
        <div
          onClick={() => navigate("/note")}
          className="blurBg p-3 rounded-md cursor-pointer w-full flex flex-col justify-center items-center"
        >
          <FaStickyNote className="text-5xl text-blue-500" />
          <h2 className="text-xl font-semibold mt-4">Notes</h2>
          <p className=" text-center mt-2">
            Save and update your notes effortlessly.
          </p>
        </div>
        <div
          onClick={() => navigate("/calender")}
          className="blurBg p-3 shadow-md cursor-pointer rounded-md w-full flex flex-col justify-center items-center"
        >
          <FaCalendarAlt className="text-5xl text-green-500" />
          <h2 className="text-xl font-semibold mt-4">Calender</h2>
          <p className=" text-center mt-2">
            Mark your days and stay organized with a personal calendar.
          </p>
        </div>
        <div
          onClick={() => navigate("/routine")}
          className="blurBg p-3 shadow-md cursor-pointer rounded-md w-full flex flex-col justify-center items-center"
        >
          <FaClipboardList className="text-5xl text-yellow-500" />
          <h2 className="text-xl font-semibold mt-4">Routine</h2>
          <p className=" mt-2 text-center ">
            Save and manage your routines as you wish.
          </p>
        </div>
        <div
          onClick={() => navigate("/blog")}
          className="blurBg p-3 shadow-md cursor-pointer rounded-md w-full flex flex-col justify-center items-center"
        >
          <FaBloggerB className="text-5xl text-red-500" />
          <h2 className="text-xl font-semibold mt-4">Blog</h2>
          <p className=" mt-2 text-center ">
            Write and explore blogs from others in our community.
          </p>
        </div>
      </div>
    </div>
  );
}
