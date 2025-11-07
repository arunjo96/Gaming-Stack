import React from "react";
import {
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import {  FaTwitter } from "react-icons/fa6";
import footerLogo from "../assets/footer/footer_logo.png";

const Footer = () => {
  const socialIcons = [
    { icon: <FaTelegramPlane />, color: "bg-[#039BE5]" },
    { icon: <FaDiscord />, color: "bg-[#5046AF]" },
    { icon: <FaTwitter />, color: "bg-[#03A9F4]" },
    {
      icon: <FaInstagram />,
      color: "bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700",
    },
    { icon: <FaYoutube />, color: "bg-red-600" },
  ];

  return (
    <footer className="footer_main_sec text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 md:gap-y-5 mb-8">
          <div className="md:w-50 sm:w-full mb-6 md:mb-0">
            <div className="mb-4">
              <img src={footerLogo} className="w-40" alt="footer_logo" />
            </div>
            <p className=" text-sm text-[#AA77A8] font-medium">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <div className="md:w-40  mb-6 md:mb-0">
            <h3 className="text-md font-medium mb-4 footer_title">Platform</h3>
            <ul className="space-y-2 footer_links">
              <li>
                <a href="#" className="  ">
                  Casino
                </a>
              </li>
              <li>
                <a href="#" className=" ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" ">
                  Sportsbook
                </a>
              </li>
              <li>
                <a href="#" className="">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-50 mb-6 md:mb-0">
            <h3 className="text-md font-medium mb-4 footer_title">About us</h3>
            <ul className="space-y-2 footer_links">
              <li>
                <a href="#" className="">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="">
                  How To Play
                </a>
              </li>
            </ul>
          </div>

          <div className="md:w-full footer_links">
            <h3 className="text-md font-medium mb-4 footer_title">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <a href="mailto:support@bitsky.com" className="">
                  Support:&nbsp;
                  <span className="text-white font-light">
                    support@bitsky.com
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:partners@bitsky.com" className="">
                  Partners:&nbsp;
                  <span className="text-white font-light">
                    partners@bitsky.com
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:legal@bitsky.com" className="">
                  Legal:&nbsp;
                  <span className="text-white font-light">
                    legal@bitsky.com
                  </span>
                </a>
              </li>
            </ul>

            <div className="flex space-x-2 mt-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.color} w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        <div className="border-t border-[#AA77A8] pt-4 text-center text-gray-400">
          <p className="text-[#AA77A8] text-sm font-medium">
            2024 Bitsky.bet, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
