"use client"

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about Us",
    },
    {
      id: 3,
      link: "Pricing",
    },
    {
      id: 4,
      link: "Features",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed nav mb-[100px]">
      <div className="ml-8">
        <h1 className="text-5xl font-signature ml-2">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
           <img src="/nav.svg" alt="" />
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium  link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <a 
          
          className="hidden md:block mr-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 duration-200"
        >
          Download
        </a>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer capitalize py-6">
            <a 
              
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 duration-200"
            >
              Download
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;