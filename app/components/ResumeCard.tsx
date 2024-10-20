import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";


interface ResumeCardProps {
  toLink:string,
  name: string;
  image: StaticImageData;
}

const ResumeCard = (details: ResumeCardProps) => {
  return (
   <Link href={details.toLink}>
        <div className="flex flex-col sm:flex-row items-center p-4 gap-4 hover:rounded-lg hover:bg-slate-500">
      <Image src={details.image} alt="resume" width={100} height={100}></Image>
      <div>
        <span className="font-semibold text-xl">{details.name}</span>
      </div>
    </div>
   </Link>
  );
};

export default ResumeCard;
