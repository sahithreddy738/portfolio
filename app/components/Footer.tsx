import Link from "next/link";
import React from "react";
import LinkedInImage from "../public/linkedin.png";
import TwitterImage from "../public/twitter.png";
import GithubImage from "../public/github.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <p className="font-bold text-xl">Sahith Reddy</p>
      <div className="flex gap-4">
        <Link href="https://x.com/SahithReddy738">
          <Image
            src={TwitterImage}
            alt="twitter-img"
            width={30}
            height={15}
          ></Image>
        </Link>
        <Link href="https://www.linkedin.com/in/sahith-reddy-marepalli-a192521b7/">
          <Image
            src={LinkedInImage}
            alt="linkedin-img"
            width={30}
            height={15}
          ></Image>
        </Link>
        <Link href="https://github.com/sahithreddy738?tab=repositories">
          <Image
            src={GithubImage}
            alt="github-img"
            width={30}
            height={15}
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
