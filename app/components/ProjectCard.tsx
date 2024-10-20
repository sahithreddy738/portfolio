import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  toLink:string,
  projectImage: StaticImageData;
  projectName: string;
  projectDescription: string;
  projectTech: string[];
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link href={props.toLink}>
        <div className="mb-2 flex flex-col sm:flex-row gap-6 w-full hover:bg-slate-500 hover:rounded-lg p-4">
      <Image src={props.projectImage} alt="project-img" className="rounded-lg" width={250} height={250} ></Image>
      <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="font-bold text-xl">{props.projectName}</span>
        <p>{props.projectDescription}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {props.projectTech.map((skill,index) => (
          <div
            className="w-24 px-2 text-center py-1 h-8 border-black bg-zinc-100 rounded-xl"
            key={index}
          >
            <p className="font-bold text-red-500">{skill}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;
