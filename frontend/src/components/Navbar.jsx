import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="bg-[#232121] fixed w-full md:w-full shadow-lg flex justify-between p-2 items-center md:pl-8 md:pr-[100px]">
      <h1 className=" items-center flex">
        <span className="md:text-[20px] pr-2 text-[blue]">&lt;B&gt;</span>
        <span className="first-letter:text-[#83df83] first-letter:text-[25px] md:first-letter:text-[35px] text-white md:text-[25px] font-notoSerif">
          BHUPENDRA
        </span>
      </h1>
      <div className="hidden md:block">
        <ul className=" flex gap-8">
          <li className="text-white font-notoSerif text-[18px]">
            <Link
              to="home"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              Home
            </Link>{" "}
          </li>
          <li className="text-white font-notoSerif text-[18px]">
            <Link
              to="about"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              About Us
            </Link>{" "}
          </li>
          <li className="text-white font-notoSerif text-[18px]">
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              Projects
            </Link>{" "}
          </li>
          <li className="text-white font-notoSerif text-[18px]">
            <Link
              to="contactus"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              Contact Us
            </Link>{" "}
          </li>
          <li className="text-white font-notoSerif text-[18px]">
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-[blue]"
            >
              Skills
            </Link>{" "}
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <GiHamburgerMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px] p-4 bg-black">
            <ul className=" flex flex-col gap-4">
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="home"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Home
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  About Us
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="projects"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Projects
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="contactus"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Contact Us
                </Link>{" "}
              </li>
              <li className="text-white font-notoSerif text-[18px]">
                <Link
                  to="skills"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-[blue]"
                >
                  Skills
                </Link>{" "}
              </li>
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
