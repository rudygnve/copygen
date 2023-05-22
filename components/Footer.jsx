import React from "react";
import Link from "next/link";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="over__padding">
      <div className="flex w-full flex-wrap pt-[80px] py-[30px] gap-[40px]">
        <div className="flex flex-auto items-center justify-center flex-col gap-2">
          <Link
            title="NovaVerse."
            className="transiton duration-300 text-2xl lg:text-4xl font-bold text-center text-slate-800 logo"
            href="/"
          >
            <img className="w-[180px]" src="/assets/logo-dark.png" alt="logo" />
          </Link>
        </div>
        <div className="flex flex-auto flex-col gap-3">
          <h2 className="font-bold text-xl text-slate-800 flex justify-center">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-center">
              <Link
                className="text-slate-600 font-semibold transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                About
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                className="text-slate-600 font-semibold transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                FAQs
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                className="text-slate-600 font-semibold transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                Help
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                className="text-slate-600 font-semibold transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-auto justify-start flex-col gap-3">
          <h2 className="font-bold text-xl text-slate-800 flex justify-center">
            Services
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-center">
              <Link
                className="text-slate-600 font-semibold transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                Blog Content
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                className="text-slate-600 font-semibold transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                Product Description
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                className="text-slate-600 font-semibold transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                Landin Page Content
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-auto flex-col gap-3">
          <h2 className="font-bold text-xl text-slate-800 flex justify-center">
            Connect With Us
          </h2>
          <ul className="flex flex-row gap-[30px] items-center self-center">
            <li>
              <Link
                className="text-slate-600 text-xl transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 text-xl transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 text-xl transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                <BsTwitter />
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 text-xl transition duration-200 hover:text-[#3F3EED]"
                href="#"
              >
                <BsLinkedin />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
