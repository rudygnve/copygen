import React from "react";
import Link from "next/link";
import { AiOutlinePlayCircle } from "react-icons/ai";

const SecondSection = () => {
  return (
    <div className="over__padding">
      <div className="w-full py-[25px] flex flex-col gap-[40px] lg:py-[50px]">
        <div className="w-full flex flex-col items-center gap-[5px]">
          <h3 className="text-[#3F3EED] font-extrabold text-sm lg:text-base text-center">
            HOW IT WORKS
          </h3>
          <h2 className="capitalize text-center text-2xl lg:text-4xl font-bold text-[#071321]">
            Instruct to our AI and generate copy
          </h2>
          <p className="text-sm mt-[15px] text-gray-600 text-center max-w-[700px] lg:text-base font-medium">
            Give our AI a few descriptions and we'll automatically create blog
            articles, product descriptions and more for you within just few
            second.
          </p>
        </div>
        <div className="display__grid">
          <div className="relative p-[20px] lg:p-[30px] overflow-hidden flex flex-col gap-[15px]">
            <h3 className="capitalize text-[#222222] text-[22px] font-bold">
              Select writing template
            </h3>
            <p className="text-gray-500 font-light">
              Simply choose a template from available list to write content for
              blog posts, landing page, website content etc.
            </p>
            <span className="absolute top-0 text-[70px] right-0 font-extrabold text-[rgb(63,62,237,0.2)]">
              1
            </span>
          </div>
          <div className="relative p-[20px] lg:p-[30px] overflow-hidden flex flex-col gap-[15px]">
            <h3 className="capitalize text-[#222222] text-[22px] font-bold">
              Describe your topic
            </h3>
            <p className="text-gray-500 font-light">
              Provide our AI content writer with few sentences on what you want
              to write, and it will start writing for you.
            </p>
            <span className="absolute top-0 text-[70px] right-0 font-extrabold text-[rgb(63,62,237,0.2)]">
              2
            </span>
          </div>
          <div className="relative p-[20px] lg:p-[30px] overflow-hidden flex flex-col gap-[15px]">
            <h3 className="capitalize text-[#222222] text-[22px] font-bold">
              Generate quality content
            </h3>
            <p className="text-gray-500 font-light">
              Our powerful AI tools will generate content in few second, then
              you can export it to wherever you need.
            </p>
            <span className="absolute top-0 text-[70px] right-0 font-extrabold text-[rgb(63,62,237,0.2)]">
              3
            </span>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col justify-center gap-[10px] lg:gap-[30px] items-center">
          <Link
            className="px-4 py-3 border-[#3F3EED] border-2 border-solid bg-[#3F3EED] text-sm lg:text-base rounded-[5px] text-white font-semibold"
            href=""
          >
            Start Your Free Trial
          </Link>
          <Link
            className="px-4 py-3 text-[#3F3EED] flex flex-row items-center gap-[8px] text-sm lg:text-base rounded-[5px] border-[#3F3EED] border-2 border-solid font-medium transition duration-200 hover:bg-[#3F3EED] hover:text-white"
            href=""
          >
            <AiOutlinePlayCircle className="text-lg animate-ping" />
            See Action Video
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
