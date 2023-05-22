import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

const FouthSection = () => {
  return (
    <div className="over__padding py-[30px] lg:py-[50px]">
      <div className="py-[50px] px-[30px] w-full flex flex-col gap-[10px] rounded-[20px] bg bg-gradient-to-b from-[rgb(63,62,237,0.25)] to-[rgb(63,62,237,0.1)]">
        <h3 className="text-[#3F3EED] font-extrabold text-sm lg:text-base text-center">
          BOOST YOUR WRITING PRODUCTIVITY
        </h3>
        <h2 className="capitalize text-[#222222] text-[30px] font-extrabold lg:text-[35px] text-center">
          End writer’s block today
        </h2>
        <p className="text-center text-gray-500 mt-[5px] font-medium">
          It’s like having access to a team of copywriting experts writing
          powerful copy for you in 1-click.
        </p>
        <Link
          className="group text-white self-center mt-[15px] flex items-center gap-[10px] bg-[#071321] text-base px-4 py-3 rounded-[5px]"
          href="#"
        >
          Start Writing For Free
          <AiOutlineArrowRight className="transition duration-300 group-hover:translate-x-[3px]" />
        </Link>
        <div className="hidden lg:flex flex-row mt-[10px] items-center justify-center gap-[30px]">
          <div className="flex flex-row items-center gap-[5px]">
            <div className="w-[15px] h-[15px] bg-[#3F3EED] flex rounded-full items-center justify-center">
              <TiTick className="text-white text-[12px]" />
            </div>
            <span className="text-gray-600 font-medium">
              No credit card required
            </span>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className="w-[15px] h-[15px] bg-[#3F3EED] flex rounded-full items-center justify-center">
              <TiTick className="text-white text-[12px]" />
            </div>
            <span className="text-gray-600 font-medium">Cancel Anytime</span>
          </div>
          <div className="flex flex-row items-center gap-[5px]">
            <div className="w-[15px] h-[15px] bg-[#3F3EED] flex rounded-full items-center justify-center">
              <TiTick className="text-white text-[12px]" />
            </div>
            <span className="text-gray-600 font-medium">
              10+ tools to expolore
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FouthSection;
