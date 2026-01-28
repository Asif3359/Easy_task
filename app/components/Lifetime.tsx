import React from "react";
import { MdSchool, MdWork } from "react-icons/md";

function Lifetime() {
  return (
    <section className="mt-12 px-3 md:px-8 sm:mt-16 md:ml-18">
      <section className="w-full lg:w-3/4 lg:ml-auto">
        <h1 id="resume" className="text-4xl font-semibold mb-8">
          Resume
        </h1>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-md bg-[#232524] flex items-center justify-center">
              <MdSchool className="text-xl" color="#f5bd4d" />
            </div>
            <h2 className="text-xl font-semibold">Education</h2>
          </div>

          <div className="flex">
            <div className="relative mr-6">
              <div className="w-px h-full bg-[#3a3d3c] mx-auto" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-[#f5bd4d] bg-[#171b1a]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-[#f5bd4d] bg-[#171b1a]" />
            </div>

            <div className="flex-1 space-y-6">
              <div className="bg-[#121414] border border-[#353535] rounded-md px-6 py-5">
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#232524] mb-4">
                  2016–2020
                </span>
                <h3 className="text-lg font-semibold">Harvard University</h3>
                <p className="text-xs text-gray-400 mb-4">
                  B.A and M.S, Computer Science
                </p>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>

              <div className="bg-[#121414] border border-[#353535] rounded-md px-6 py-5">
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#232524] mb-4">
                  2014–2016
                </span>
                <h3 className="text-lg font-semibold">Helwan University</h3>
                <p className="text-xs text-gray-400 mb-4">Bachelor Degree</p>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work History */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-md bg-[#232524] flex items-center justify-center">
              <MdWork className="text-xl" color="#f5bd4d" />
            </div>
            <h2 className="text-xl font-semibold">Work History</h2>
          </div>

          <div className="flex">
            <div className="relative mr-6">
              <div className="w-px h-full bg-[#3a3d3c] mx-auto" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-[#f5bd4d] bg-[#171b1a]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-[#f5bd4d] bg-[#171b1a]" />
            </div>

            <div className="flex-1 space-y-6">
              <div className="bg-[#121414] border border-[#353535] rounded-md px-6 py-5">
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#232524] mb-4">
                  2016–2022
                </span>
                <h3 className="text-lg font-semibold">UI/UX design</h3>
                <p className="text-xs text-gray-400 mb-4">Web site design</p>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>

              <div className="bg-[#121414] border border-[#353535] rounded-md px-6 py-5">
                <span className="inline-block text-xs px-3 py-1 rounded-full bg-[#232524] mb-4">
                  2012–2016
                </span>
                <h3 className="text-lg font-semibold">Junior Web designers</h3>
                <p className="text-xs text-gray-400 mb-4">Product designer</p>
                <p className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  aut commodi earum eligendi ipsum, laborum maiores mollitia,
                  optio quam quis rerum totam voluptas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Lifetime;
