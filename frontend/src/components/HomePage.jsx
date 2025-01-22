import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import Home from "../../public/Home3.png";

import { Link } from "react-scroll";

const HomePage = () => {
  return (
    <div id="home" className="md:pl-[100px] pt-[100px] md:pr-[100px] ">
      <div className="w-full   flex flex-col">
        <div className="pl-4 md:pl-0 md:flex  justify-center">
          <h1 className="font-signika text-[skyblue] text-[40px]">Developer</h1>
        </div>
        <div className="md:flex justify-between pl-[20px] md:pl-[100px] pt-[50px] items-center">
          <div className=" md:hidden mb-8">
            <div className=" bg-white  rounded-full w-[150px] h-[150px] md:w-[260px] md:h-[260px] flex  overflow-hidden border-2 border-[blue]">
              <img
                src={Home}
                alt="img"
                className=" object-cover object-center pr-4"
              />
            </div>
          </div>

          <div>
            <h1 className="text-gray-100 text-[25px] md:text-[35px] font-notoSerif">
              Hey
            </h1>
            <h2 className="text-gray-100  text-[25px] md:text-[35px] font-notoSerif">
              I'm <span className="text-[blue] ">Bhupendra Saini</span>,
            </h2>
            <p className="text-gray-100 text-[25px] md:text-[35px] font-notoSerif">
              MERN-Stack Developer
            </p>
            <div className="flex items-center gap-2 pt-4">
              <p className="text-[#73d7ff] font-serif md:text-[23px]  cursor-pointer">
                Let's Talk{" "}
              </p>
              <p className="bg-gray-500 rounded-full p-1 text-white cursor-pointer">
                <Link smooth={true} duration={1000} to="contactus">
                  {" "}
                  <MdOutlineCameraAlt />
                </Link>
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" bg-white  rounded-full w-[260px] h-[260px] flex  overflow-hidden border-2 border-[blue]">
              <img
                src={Home}
                alt="img"
                className=" object-cover object-center pr-4"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[50px] md:mt-[150px]" />
    </div>
  );
};

export default HomePage;
