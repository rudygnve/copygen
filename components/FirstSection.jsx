import React from "react";
import { TbWriting } from "react-icons/tb";
import { FaListAlt } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { CgWebsite } from "react-icons/cg";
import { GoChecklist } from "react-icons/go";

const FirstSection = () => {
  return (
    <div className="over__padding">
      <div className="w-full pt-[50px] pb-[25px] flex flex-col gap-[50px] lg:pt-[100px] lg:pb-[50px]">
        <div className="w-full flex flex-col items-center gap-[5px]">
          <h3 className="text-[#3F3EED] font-extrabold text-sm lg:text-base text-center">
            GET STARTED FOR FREE
          </h3>
          <h2 className="capitalize text-center text-2xl lg:text-4xl font-bold text-[#071321]">
            AI Generate content in seconds
          </h2>
          <p className="text-sm mt-[15px] text-gray-600 text-center max-w-[700px] lg:text-base font-medium">
            Give our AI a few descriptions and we'll automatically create blog
            articles, product descriptions and more for you within just few
            second.
          </p>
        </div>
        <div className="display__grid">
          <div className="flex flex-col items-center gap-[15px] p-[25px] lg:p-[40px] rounded-[20px] shadow-md">
            <div className="w-[70px] h-[70px] bg-[rgb(63,62,237,0.2)] rounded-[15px] flex items-center justify-center">
              <TbWriting className="text-3xl text-[#3F3EED]" />
            </div>
            <h3 className="text-[20px] text-center font-bold text-[#222222]">
              Blog Post & Articles
            </h3>
            <p className="text-gray-500 text-center font-medium text-base">
              Generate optimized blog post and articles to get organic traffic -
              making you visible to the world.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[15px] p-[25px] lg:p-[40px] rounded-[20px] shadow-md">
            <div className="w-[70px] h-[70px] bg-[rgb(63,62,237,0.2)] rounded-[15px] flex items-center justify-center">
              <FaListAlt className="text-3xl text-[#3F3EED]" />
            </div>
            <h3 className="text-[20px] text-center font-bold text-[#222222]">
              Product Description
            </h3>
            <p className="text-gray-500 text-center font-medium text-base">
              Create a perfect description for your products to engage your
              customers to click and buy.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[15px] p-[25px] lg:p-[40px] rounded-[20px] shadow-md">
            <div className="w-[70px] h-[70px] bg-[rgb(63,62,237,0.2)] rounded-[15px] flex items-center justify-center">
              <MdAdsClick className="text-3xl text-[#3F3EED]" />
            </div>
            <h3 className="text-[20px] text-center font-bold text-[#222222]">
              Social Media Ads
            </h3>
            <p className="text-gray-500 text-center font-medium text-base">
              Create ads copies for your social media - make an impact with your
              online marketing campaigns.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[15px] p-[25px] lg:p-[40px] rounded-[20px] shadow-md">
            <div className="w-[70px] h-[70px] bg-[rgb(63,62,237,0.2)] rounded-[15px] flex items-center justify-center">
              <TiTick className="text-3xl text-[#3F3EED]" />
            </div>
            <h3 className="text-[20px] text-center font-bold text-[#222222]">
              Product Benefits
            </h3>
            <p className="text-gray-500 text-center font-medium text-base">
              Create a bullet point list of your product benefits that appeal to
              your customers to purchase.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[15px] p-[25px] lg:p-[40px] rounded-[20px] shadow-md">
            <div className="w-[70px] h-[70px] bg-[rgb(63,62,237,0.2)] rounded-[15px] flex items-center justify-center">
              <CgWebsite className="text-3xl text-[#3F3EED]" />
            </div>
            <h3 className="text-[20px] text-center font-bold text-[#222222]">
              Landing Page Content
            </h3>
            <p className="text-gray-500 text-center font-medium text-base">
              Write very attractive headlines, slogans or paragraph for your
              landing page of your website.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[15px] p-[25px] lg:p-[40px] rounded-[20px] shadow-md">
            <div className="w-[70px] h-[70px] bg-[rgb(63,62,237,0.2)] rounded-[15px] flex items-center justify-center">
              <GoChecklist className="text-3xl text-[#3F3EED]" />
            </div>
            <h3 className="text-[20px] text-center font-bold text-[#222222]">
              Suggest Improvements
            </h3>
            <p className="text-gray-500 text-center font-medium text-base">
              Need to improve your existing content? Our AI will rewrite and
              improve the content for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
