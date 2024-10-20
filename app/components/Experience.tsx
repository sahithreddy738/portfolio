import React from "react";
import Image from "next/image";
import CompanyImage from "../public/zemoso.jpeg";

const Experience = () => {
  return (
    <div className="w-full">
      <p className="font-semibold text-2xl mb-4">Work Experience</p>
      <div className=" border-slate-500">
        <div className="flex gap-4 items-center">
          <Image
            src={CompanyImage}
            alt="company-logo"
            width={40}
            height={15}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xl">
              Dev Intern{" "}
              <span className="text-red-500 text-xl">@Zemoso Technologies</span>
            </span>
            <span className="font-semibold">Dec 2022 - Nov 2023</span>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
