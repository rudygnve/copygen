import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <div className="over__padding overflow-x-hidden">
      <div className="flex flex-col relative">
        <div className="absolute flex translate-x-[-50%] bottom-0 left-[50%] h-[400px] z-10 w-full">
          <div className="flex-1 h-100 bg-[#48C9B0] blur-[200px] rounded-tl-full" />
          <div className="flex-1 h-100 bg-[#A569BD] blur-[200px] rounded-tr-full" />
        </div>
        <div className="flex z-20 flex-col gap-[10px] lg:gap-[30px] py-[50px] items-center">
          <h1 className="text-[#071321] font-extrabold text-[35px] lg:text-[50px] text-center max-w-[900px]">
            Unlock the power of Copywriting AI and Create Content Faster
          </h1>
          <p className="text-gray-600 font-semibold text-sm lg:text-lg text-center max-w-[700px]">
            AI Copywriting is revolutionizing the way content is created. AI can
            create content for blogs, articles, websites, social media and more.
          </p>
          <div className="mt-[15px] self-center text-center flex flex-col gap-[15px]">
            <Link
              className="group text-white self-center mt-[15px] flex items-center gap-[10px] bg-[#071321] text-base px-4 py-3 rounded-[5px]"
              href="#"
            >
              Start Writing For Free
              <AiOutlineArrowRight className="transition duration-300 group-hover:translate-x-[3px]" />
            </Link>
            <p className="text-gray-500 text-sm lg:text-base font-medium">
              No Credit Card Required
            </p>
          </div>
        </div>
        <div className="flex z-20 justify-center">
          <img
            className="w-full max-w-[900px] rounded-t-[15px]"
            src="/assets/banner.jpg"
            alt="preview"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
