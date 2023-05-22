import React from "react";

const ThirdSection = () => {
  return (
    <div className="over__padding">
      <div className="flex flex-col lg:flex-row py-[30px] gap-[30px] lg:gap-[50px] items-center lg:py-[50px]">
        <div className="flex-1">
          <img src="/assets/image.jpg" className="rounded-[20px]" alt="image" />
        </div>
        <div className="flex-1 flex flex-col gap-[20px] lg:gap-[25px]">
          <h2 className="capitalize text-[#222222] text-[30px] font-extrabold lg:text-[35px]">
            AI Generate content in seconds
          </h2>
          <p className="text-gray-700 text-base">
            Generate copy that converts for business bios, facebook ads, product
            descriptions, emails, landing pages, social ads, and more.
          </p>
          <ul className="flex flex-col gap-[15px]">
            <li className="flex flex-row gap-[5px] items-center">
              <span className="w-[10px] h-[2px] rounded-full bg-[#3F3EED]"></span>
              <p className="text-gray-500 text-base font-light">
                Create article that are complete in less than 15 seconds.
              </p>
            </li>
            <li className="flex flex-row gap-[5px] items-center">
              <span className="w-[10px] h-[2px] rounded-full bg-[#3F3EED]"></span>
              <p className="text-gray-500 text-base font-light">
                Save hundreds of hours with our AI article generator.
              </p>
            </li>
            <li className="flex flex-row gap-[5px] items-center">
              <span className="w-[10px] h-[2px] rounded-full bg-[#3F3EED]"></span>
              <p className="text-gray-500 text-base font-light">
                Improve your copy with the article rewriter.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
