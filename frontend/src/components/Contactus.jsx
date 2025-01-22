import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoLocation } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineCameraAlt } from "react-icons/md";
import { toast } from "sonner";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, SetMessage] = useState("");

  const submithandler = async () => {
    // jab project ko live kro tab ke liye ==>  https://mainportpoliowebsite.onrender.com/message

    // jab project me change kar rahe ho tab ==> http://localhost:8000/message

    let result = await fetch(
      "https://mainportpoliowebsite.onrender.com/message",
      {
        method: "post",
        body: JSON.stringify({ name, email, number, message }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    // console.log(result);
    if (result) {
      toast.success(result.message);
      setName(""), setEmail(""), setNumber(""), SetMessage("");
    } else {
      toast.error(result.message);
    }
  };
  const handleOpenPdf = () => {
    window.open("/resume.pdf", "_blank");
  };
  return (
    <div
      id="contactus"
      className="relative  w-full md:w-full pt-[70px] bg-[url('https://www.shutterstock.com/image-photo/manager-office-contact-us-set-600nw-663753661.jpg')] md:h-[800px] bg-cover opacity-100 bg-center pb-4 md:mt-[80px] z-1"
    >
      <div className="absolute inset-0 bg-[#b9b0b0] opacity-85"></div>
      <div className="relative z-8 flex items-center justify-center flex-col ">
        <div className="text-center">
          <h1 className="text-gray-100 font-serif text-[35px]">Contact Us</h1>
        </div>
        <div className="mt-10  md:p-4 flex flex-col md:flex-row w-full justify-center gap-10 ">
          <div className=" p-2 pt-[60px] flex flex-col gap-12 pr-[200px]">
            <div className="flex gap-8 items-center p-2 md:p-0">
              <p className="border border-gray-200 p-2 md:p-4 rounded-full bg-gray-300">
                <span>
                  <IoLocation className="text-[22px] md:text-[30px] text-sky-600  cursor-pointer" />
                </span>
              </p>
              <div>
                <p className="font-merriweather text-sky-700 text-[18px]">
                  Address
                </p>
                <p className="font-notoSerif w-[250px] text-[#0f5146]">
                  Dausa, Rajasthan (321609)
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center  p-2 md:p-0">
              <p className="border border-gray-200 p-2 md:p-4 rounded-full bg-gray-300">
                <span>
                  <FaWhatsapp className="text-[22px] md:text-[30px] text-sky-600 cursor-pointer" />
                </span>
              </p>
              <div>
                <p className="font-merriweather text-sky-700 text-[18px]">
                  Phone
                </p>
                <p className="font-notoSerif text-[#0f5146]">+91 8079057294</p>
              </div>
            </div>
            <div className="flex gap-8 items-center  p-2 md:p-0">
              <p className="border border-gray-200 p-2 md:p-4 rounded-full bg-gray-300">
                <MdOutlineEmail className="text-[22px] md:text-[30px] text-sky-600  cursor-pointer" />
              </p>
              <div>
                <p className="font-merriweather text-sky-700 text-[18px]">
                  Email
                </p>
                <p className="font-notoSerif text-[#0f5146]">
                  sainibhupendra50042@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center  p-2 md:p-0">
              <p
                className="border border-gray-200 p-2 md:p-4 rounded-full bg-gray-300"
                onClick={handleOpenPdf}
              >
                <MdOutlineCameraAlt className="text-[22px] md:text-[30px] text-sky-600  cursor-pointer" />
              </p>
              <div>
                <p className="font-merriweather text-sky-700 text-[18px]">CV</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 w-full md:w-[440px] rounded-lg md:ml-4 mt-4">
            <h1 className="font-merriweather text-[22px]">Send Message</h1>

            <div className="flex flex-col gap-8 pt-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="border-b text-gray-800 p-2 border-gray-700 outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="border-b text-gray-800 p-2 border-gray-700 outline-none"
              />
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Your Whatshap Number"
                className="border-b text-gray-800 p-2 border-gray-700 outline-none"
              />
              <textarea
                placeholder="Type Your Message"
                value={message}
                onChange={(e) => SetMessage(e.target.value)}
                className="border-b text-gray-800 p-2 h-[43px] border-gray-700 outline-none"
              />
              <Button
                type="submit"
                onClick={submithandler}
                className="mt-4 w-[100px] bg-sky-500 font-medium text-[14px] rounded-full hover:bg-sky-600"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
