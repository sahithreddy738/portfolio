import React from "react";
import { RESUME_DETAILS } from "../constants";
import ResumeCard from "../components/ResumeCard";

const ResumePage = () => {
  return (
    <div className="w-[80%] mx-auto">
      <span className="font-bold text-2xl">Resume,Certifications</span>
      <div className="flex flex-col sm:flex-row  gap-8 mt-10">
        {RESUME_DETAILS.map((details) => (
          <ResumeCard key={details.name} {...details} />
        ))}
      </div>
    </div>
  );
};

export default ResumePage;
