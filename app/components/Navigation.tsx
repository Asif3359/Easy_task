import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function Navigation() {
  return (
    <div className=" bg-[#121414] fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row justify-between items-center container mx-auto">
        <div className="flex-[0.3] px-8 py-4">
          <h1 className="text-2xl font-bold">
            Daryl{" "}
            <span
              className="bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] 
               bg-clip-text text-transparent"
            >
              Smith
            </span>
          </h1>
          <h3>UI/UX designer</h3>
        </div>
        <div className="flex items-center mx-2">
          <div className="w-px h-10 bg-[#353535] rounded-full"></div>
        </div>
        <div className="flex-1 flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between items-center gap-2">
            <div>
              <Link
                href="/"
                className="group transition-all duration-300 hover:scale-105"
              >
                <IoHomeOutline className=" text-2xl p-0.5 rounded-sm bg-amber-400 text-white group-hover:drop-shadow-[0_0_8px_rgba(245,189,77,0.6)] transition-all duration-300" />
              </Link>
            </div>
            <div>
              <Link href="/" className="font-bold text-2xl hover:underline">
                Home
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center px-8 py-4">
            <a
              href="mailto:asifahammednishst@gmail.com"
              className="inline-block group"
            >
              <h1
                className="bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] 
               bg-clip-text text-transparent
               border border-amber-400/30 
               px-4 py-2 rounded-full
               transition-all duration-300
               group-hover:scale-105"
              >
                Talk to Me
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

// background: linear-gradient(89.71deg, #F5BD4D 0.36%, #F89222 99.88%);
