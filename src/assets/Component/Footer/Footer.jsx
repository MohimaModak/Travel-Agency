import React from "react";
import "./Footer.css";
import footer from "../../Gallery/map-removebg.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import icon from '../../Gallery/icon.png'
const Footer = () => {
  return (
    <div className="vacationFont  p-16 ">
      <div className="relative">
        <div className="flex justify-center items-center">
          <img src={footer} className="opacity-10" />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="">
            <div className="flex justify-center items-center gap-3">

            <h1 className="text-blue-400 text-xl sm:text-2xl md:text-3xl text-center vacationHeading">
              Dhaka Popular Travel Ltd
            </h1>
           

            </div>
            <h1 className="text-blue-500  text-xl text-center vacationHeading py-5 ">
              Follow us here
            </h1>

            <div className="flex justify-center items-center ">
              <div className="grid grid-cols-4 gap-5 ">
                <span className="text-2xl text-blue-600 cursor-pointer">
                  <FaFacebook />
                </span>
                <span className="text-2xl text-red-600 cursor-pointer">
                  <FaPinterest />
                </span>

                <span className="text-2xl text-blue-600 cursor-pointer">
                  <FaLinkedin />
                </span>
                <span className="text-2xl text-blue-600 cursor-pointer">
                  <IoLogoTwitter />
                </span>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
