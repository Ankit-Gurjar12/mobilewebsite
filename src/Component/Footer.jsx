import React from "react";
import { MdOutlineAddIcCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { TbBrandFacebook } from "react-icons/tb";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { ImMobile2 } from "react-icons/im";
import { FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-gray-100 mt-10">
      <div className="flex flex-col justify-between h-full">
        <div className="mb-6">
          <div className="font-extrabold mb-2">1. About Us</div>
          <p className="text-gray-600">
            As you begin to write your "About Me" page, consider who your target
            audience is.
          </p>
        </div>

        <div>
          <div className="font-extrabold mb-2">4. Contact Us</div>
          <div className="flex items-center mb-2">
            <MdOutlineAddIcCall size="20px" className="mr-2 text-red-500" />
            <p className="text-gray-600">+91 1234567890</p>
          </div>
          <div className="flex items-center">
            <CiMail size="20px" className="mr-2 text-red-500" />
            <p className="text-gray-600">abc@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="font-extrabold mb-3">2. Our Services</div>
          <div className="font-semibold space-y-1">
            {["Mobile Screen Services", "Laptop Screen Services","Mobile Screen Services", "Laptop Screen Services", "Mobile Screen Services", "Laptop Screen Services"].map((service, index) => (
              <div className="flex items-center mb-2" key={index}>
                {service.includes("Mobile") ? (
                  <ImMobile2 size="20px" className="mr-2" />
                ) : (
                  <FaLaptopCode size="20px" className="mr-2" />
                )}
                <p className="text-gray-600">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="font-extrabold mb-3">3. Subscribe Us</div>
          <div className="flex items-center space-x-4 mb-4">
            {[{
              href: "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F",
              icon: <TbBrandFacebook size="30px" className="text-white" />
            }, {
              href: "https://x.com/?lang=en",
              icon: <CiTwitter size="30px" className="text-white" />
            }, {
              href: "https://www.instagram.com/vyanwebs.in?igsh=a2gyajhhOXlzbHpx",
              icon: <FaInstagram size="30px" className="text-white" />
            }, {
              href: "https://www.youtube.com/",
              icon: <FiYoutube size="30px" className="text-white" />
            }, {
              href: "https://in.linkedin.com/company/vyanwebs",
              icon: <FaLinkedin size="30px" className="text-white" />
            }].map((social, index) => (
              <a
                href={social.href}
                key={index}
                className="p-2 bg-gray-700 rounded-full transform transition duration-500 hover:scale-105 hover:bg-red-500 hover:shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            className="mt-2 w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition duration-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;