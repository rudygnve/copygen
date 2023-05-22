import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div className="over__padding">
      <div className="w-full py-[20px] border-solid border-[2px] border-r-0 border-l-0 border-b-0 border-gray-200 flex items-center justify-center">
        <span className="text-center text-base text-gray-400">
          © {new Date().getFullYear()} Copygen | All Rights Reserved | Created
          by{" "}
          <Link
            className="text-[#3F3EED] font-medium"
            href="https://www.linkedin.com/in/rudy-genave/"
          >
            Rudy Genave
          </Link>
          .
        </span>
      </div>
    </div>
  );
};

export default Copyright;
