import { FaRegLightbulb } from "react-icons/fa";
import aboutimg from "../../images/about.png";

export default function About() {
  return (
    <div className="w-full p-2 h-full pb-[60px] flex justify-center items-start">
      <div className="blurBg p-3  py-5 rounded-xl overflow-scroll container min-h-[500px]">
        <div className=" py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <div className="md:w-1/2 flex items-center">
                <FaRegLightbulb className="text-6xl text-yellow-500 mr-4" />
                <div>
                  <h2 className="text-4xl font-bold mb-6">About Us</h2>
                  <p className="text-lg  mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla dapibus erat vitae nunc feugiat, quis bibendum ipsum
                    posuere. Cras auctor dignissim libero, id consequat leo
                    vestibulum a. Nullam eleifend, tortor nec faucibus suscipit,
                    dolor leo volutpat lorem, nec accumsan arcu lectus nec nisi.
                  </p>
                  <p className="text-lg  mb-8">
                    Fusce eget ligula eget felis iaculis auctor. Donec efficitur
                    erat in quam ultricies, ac rhoncus lacus dignissim. Vivamus
                    quis sapien id nulla placerat auctor. Vestibulum nec pretium
                    velit.
                  </p>
                  <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    className="max-w-full h-auto"
                    src={aboutimg}
                    alt="About Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
