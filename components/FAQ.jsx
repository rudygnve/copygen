import React, { useState } from "react";
import { data } from "../data";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="over__padding">
      <div className="w-full py-[25px] flex gap-[20px] flex-col lg:gap-[40px] lg:py-[50px]">
        <div className="w-full flex  flex-col items-center gap-[5px]">
          <h3 className="text-[#3F3EED] font-extrabold text-sm lg:text-base text-center">
            FAQs
          </h3>
          <h2 className="capitalize text-center text-2xl lg:text-4xl font-bold text-[#071321]">
            What People Asked
          </h2>
        </div>
        <div className="flex items-center justify-center flex-col">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex w-full border-2 border-t-0 border-l-0 border-r-0 border-solid border-gray-300 border-opacity-[0.6] flex-col max-w-[800px]"
            >
              <div
                onClick={() => {
                  toggle(i);
                }}
                className="py-[20px] cursor-pointer flex w-full max-w-[800px] flex-row items-center justify-between"
              >
                <h3
                  className={
                    selected === i
                      ? "text-[#3F3EED] font-semibold text-[18px]"
                      : "text-slate-800 font-semibold text-[18px]"
                  }
                >
                  {item.question}
                </h3>
                <span
                  className={
                    selected === i ? "text-xl text-[#3F3EED]" : "text-xl"
                  }
                >
                  {selected === i ? "-" : "+"}
                </span>
              </div>
              <div
                className={selected === i ? "pb-[15px]" : "pb-[15px] hidden"}
              >
                <span className="font-light transition duration-500 text-gray-600">
                  {item.answer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
