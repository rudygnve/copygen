import React from "react";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="over__padding">
      <div className="w-full py-[25px] flex flex-col gap-[40px] lg:py-[50px]">
        <div className="w-full flex flex-col items-center gap-[5px]">
          <h3 className="text-[#3F3EED] font-extrabold text-sm lg:text-base text-center">
            PRICING
          </h3>
          <h2 className="capitalize text-center text-2xl lg:text-4xl font-bold text-[#071321]">
            Start your content writing with AI
          </h2>
          <p className="text-sm mt-[15px] text-gray-600 text-center max-w-[700px] lg:text-base font-medium">
            With our simple plans, supercharge your content writing to helps
            your business.
          </p>
        </div>
        <div className="display__grid">
          <div className="flex flex-col p-[30px] rounded-[20px] shadow-md gap-[15px]">
            <h3 className="text-[#333333] text-[25px] font-bold text-center">
              Free
            </h3>
            <span className="text-[40px] font-extrabold text-center text-[#222222]">
              $0{" "}
              <span className="text-gray-600 font-medium text-[20px]">
                /Month
              </span>
            </span>
            <Link
              className="bg-[rgb(63,62,237,0.2)] rounded-[5px] w-full flex text-[#3F3EED] font-medium items-center justify-center py-3"
              href="#"
            >
              Start Free Trial Today
            </Link>
            <div className="py-[15px] flex flex-col items-start text-start gap-[15px]">
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  <span className="font-bold text-slate-800">10,000</span>{" "}
                  Monthly Word Limit
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  <span className="font-bold text-slate-800">10+</span>{" "}
                  Templates
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Advance Editor Tool</span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  Regular Technical Support
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Unlimited Logins</span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Newest Features</span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col p-[30px] border-[4px] border-solid border-[#3F3EED] rounded-[20px] shadow-md gap-[15px]">
            <span className="absolute top-[10px] right-[10px] rounded-full text-white font-semibold px-3 text-sm py-1 bg-[#3F3EED]">
              Popular
            </span>
            <h3 className="text-[#333333] text-[25px] font-bold text-center">
              Basic
            </h3>
            <span className="text-[40px] font-extrabold text-center text-[#222222]">
              $9{" "}
              <span className="text-gray-600 font-medium text-[20px]">
                /Month
              </span>
            </span>
            <Link
              className="rounded-[5px] w-full flex text-white bg-[#3F3EED] font-medium items-center justify-center py-3"
              href="#"
            >
              Start Free Trial Today
            </Link>
            <div className="py-[15px] flex flex-col items-start text-start gap-[15px]">
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  <span className="font-bold text-slate-800">25,000</span>{" "}
                  Monthly Word Limit
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  <span className="font-bold text-slate-800">15+</span>{" "}
                  Templates
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Advance Editor Tool</span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  Regular Technical Support
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Unlimited Logins</span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Newest Features</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-[30px] rounded-[20px] shadow-md gap-[15px]">
            <h3 className="text-[#333333] text-[25px] font-bold text-center">
              Premium
            </h3>
            <span className="text-[40px] font-extrabold text-center text-[#222222]">
              $19{" "}
              <span className="text-gray-600 font-medium text-[20px]">
                /Month
              </span>
            </span>
            <Link
              className="bg-[rgb(63,62,237,0.2)] rounded-[5px] w-full flex text-[#3F3EED] font-medium items-center justify-center py-3"
              href="#"
            >
              Start Free Trial Today
            </Link>
            <div className="py-[15px] flex flex-col items-start text-start gap-[15px]">
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  <span className="font-bold text-slate-800">50,000</span>{" "}
                  Monthly Word Limit
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  <span className="font-bold text-slate-800">30+</span>{" "}
                  Templates
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Advance Editor Tool</span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">
                  Regular Technical Support
                </span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Unlimited Logins</span>
              </div>
              <div className="flex items-center w-[fit-content] flex-row gap-[5px]">
                <TiTick className="text-[#3F3EED] text-xl" />
                <span className="text-slate-700">Newest Features</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
