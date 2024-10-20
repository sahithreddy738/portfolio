import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="h-24">
      <ul className="pt-4 font-semibold text-lg  justify-center flex flex-row items-center gap-4">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="hover:underline">
          <Link href="/resume">Resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
