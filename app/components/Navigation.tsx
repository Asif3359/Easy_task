import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function Navigation() {
  return (
    <header className="bg-[#121414] sticky top-0 z-50">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 py-4 lg:px-4">
          <div className=" md:flex-[0.3] flex flex-col">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold leading-tight"
            >
              Daryl{" "}
              <span
                className="bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] 
                 bg-clip-text text-transparent"
              >
                Smith
              </span>
            </Link>
            <h3 className="text-sm text-gray-300">UI/UX designer</h3>
          </div>

          <div className="hidden sm:flex items-center mx-2">
            <div className="w-px h-10 bg-[#353535] rounded-full"></div>
          </div>

          <div className="lg:flex-1 md:flex-[0.6] flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-center gap-2">
              <Link
                href="/"
                className="group transition-all duration-300 hover:scale-105"
              >
                <IoHomeOutline className="text-xl sm:text-2xl p-0.5 rounded-sm bg-amber-400 text-white group-hover:drop-shadow-[0_0_8px_rgba(245,189,77,0.6)] transition-all duration-300" />
              </Link>
              <Link
                href="/"
                className="font-bold text-lg sm:text-2xl hover:underline"
              >
                Home
              </Link>
            </div>

            <a
              href="mailto:asifahammednishst@gmail.com"
              className="inline-block group"
            >
              <span className=" bg-transparent border-2 border-amber-400 text-amber-400 px-6 py-2 rounded-full text-sm font-semibold hover:bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] hover:text-white hover:border-transparent transition-all duration-300 self-start flex flex-row items-center gap-2">
                Talk to Me
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

// background: linear-gradient(89.71deg, #F5BD4D 0.36%, #F89222 99.88%);
