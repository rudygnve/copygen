import React from "react";
import Link from "next/link";
import { BiMoon } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="over__padding">
      <div className="flex py-4 transition duration-600 items-center justify-between">
        <div className="flex flex-row items-center gap-[50px]">
          <Link href="/">
            <img className="w-[130px]" src="/assets/logo-dark.png" alt="logo" />
          </Link>
          <ul className="lg:flex hidden items-center flex-row gap-[35px]">
            <li>
              <Link className="text-[#071321] font-medium text-base" href="">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-[#071321] font-medium text-base" href="">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-[#071321] font-medium text-base" href="">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-[#071321] font-medium text-base" href="">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-[#071321] font-medium text-base" href="">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center flex-row gap-[20px] lg:gap-[30px]">
          <div className="w-[30px] cursor-pointer flex items-center justify-center rounded-full bg-gray-200 h-[30px]">
            <BiMoon className="text-[#071321]" />
          </div>
          <Link
            className="text-[#071321] hidden lg:block font-semibold"
            href=""
          >
            Login
          </Link>
          <Link
            className="px-3 py-2 bg-[#3F3EED] text-sm lg:text-base rounded-[5px] text-white font-semibold"
            href=""
          >
            Start Writing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
