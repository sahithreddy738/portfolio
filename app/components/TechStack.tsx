import React from "react";
import { SKILLS } from "../constants";

const TechStack = () => {
  return (
    <div className="w-full">
      <p className="font-semibold text-2xl mb-4">Tech Stack</p>
      <div className="flex flex-wrap gap-4">
      {SKILLS.map((skill) => (
        <div
          className="w-28 px-2 text-center py-1 h-8 border-black bg-zinc-100 rounded-2xl"
          key={skill}
        >
          <p className="font-bold text-red-600">{skill}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default TechStack;
