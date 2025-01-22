import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";

const project = [
  {
    img: "https://images01.nicepagecdn.com/page/53/32/homepage-design-preview-533265.jpg",
    name: "Food-Restaurant",
    content:
      "This project is a complete Food-Restaurant website. It is made in complete MERN.It is designed for both restaurateurs and customers. You can create a restaurant from the restaurateur side, create a menu, confirm or pending the order placed from the customer side, or view the menu from the customer side. You can also order anything...",
    skills: "(MERN)",
    link: "https://restau-3ka1.onrender.com/",
  },
  {
    img: "https://cdn.dribbble.com/userupload/4217285/file/original-a72007ef24d1d185081316526d9c3527.png",
    name: "Job-portal",
    content:
      "This project is a complete job portal website. It is made in complete MERN. It is made for both student or recruiter. It is job post from recruiter account, apply accept, reject company, create or apply job from student account, search etc. is featured. This project has basically been created for learning or enhancing skills.",
    skills: "MERN",
    link: "https://job-portal-8wsk.onrender.com/",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/D4D2DAQHrzNJdiqoaYA/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1727696972697?e=1737975600&v=beta&t=A3bwSOleXWAfzJDvMHcm0yibWYoyjjWtA3g1Zjqznmk",
    name: "Text-utils",
    content:
      "This is a simple textutils website which is completely built in react js. This website has uppercase, lowercase and text copy to any text, remove extra spaces, and many other features.",
    skills: "React js",
    link: "https://sainibhupen1.github.io/text-count/",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/D4D2DAQGZ3yg7zUUqiQ/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1727418119123?e=1737972000&v=beta&t=n-T3fQhXUmWTtejKP6huv0_EZCZSrZ3WyKSvAEFe-YA",
    name: "Create-resume-library",
    content:
      "This is entirely built using the MERN stack (MongoDB, Express, React, Node.js). The user can store a book with its price in the library, update it, or delete it. The user can create a resume and also update or download it.",
    skills: "MERN",
    link: "https://create-resume-library.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full md:pl-[100px] pl-2 md:pr-[100px]">
      <div>
        <h1 className="text-[blue] md:text-[35px] font-notoSerif underline flex pl-6 text-[20px] md:pl-0 md:justify-center mt-[50px] md:mt-[20px] mb-[60px]">
          Projects*
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-2">
        {project.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 rounded-tr-[100px] p-2 border-gray-100 w-[320px] h-[350px] bg-[#95d3c3]"
            >
              <div className="flex items-center justify-between pr-8">
                <img
                  src={item.img}
                  alt=""
                  className="w-[230px] h-[100px] rounded-tr-[20px]"
                />
                <div className="text-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <p className="bg-[blue] rounded-full p-1 text-white cursor-pointer">
                      <MdOutlineCameraAlt />
                    </p>
                  </a>
                </div>
              </div>

              <h1 className="pt-1 cursor-default">
                <span className="text-[15px] font-merriweather  text-[blue]">
                  Project-Name:-
                </span>
                <span className="text-center text-[#1b112b] font-serif">
                  {item.name}
                </span>
              </h1>
              <p className="font-garamond pt-1 text-[15px] text-[rgb(60,19,76)]  cursor-default">
                {item.content}
              </p>
              <h1 className="pt-1  cursor-default">
                <span className="text-[12px] font-merriweather  text-[blue]">
                  Skills:-
                </span>
                <span className="text-center text-[blue] font-merriweather text-[12px]">
                  {item.skills}
                </span>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
