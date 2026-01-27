import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";

function Banner() {
  return (
    <div className=" flex flex-row justify-between items-start">
      <div className="flex-[0.3] flex flex-col bg-black p-4 ml-8">
        <div>
          <Image src="/man.png" width={300} height={500} alt="" />
        </div>
        <div className="flex flex-row justify-between items-center gap-2 mt-2">
          <Link href="#facebook">
            <CiFacebook className="text-4xl font-bold" />
          </Link>
          <Link href="#linkedin">
            <FaLinkedin className="text-4xl font-bold" />
          </Link>
          <Link href="#github">
            <FaGithub className="text-4xl font-bold" />
          </Link>
          <Link href="#twitter">
            <FaTwitter className="text-4xl font-bold" />
          </Link>
          <Link href="#instagram">
            <IoLogoInstagram className="text-4xl font-bold" />
          </Link>
        </div>
      </div>
      <div className="flex-1 ">
        <div className="p-12 w-4/5">
          <h3 className="py-1">
            <span
              className="bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] 
               bg-clip-text text-transparent"
            >
              INTRODUCTION
            </span>
          </h3>
          <h1 className="text-6xl py-2">
            I&apos;m a Creative Developer & UI/UX Design Expert
          </h1>
          <p className="font-bold mt-2 flex flex-row gap-4">
            <span>24 years</span>
            <span>/ </span>
            <span>Robert Smith </span>
            <span>/ </span>
            <span>UK London</span>
          </p>
          <p className="text-md mt-6">
            Prolific, full stack web developer with a passion for metrics and
            beating former &quot;best-yets. Prototyped 25 new product features
            per year for Flexor, Inc. Decreased rework by 22% and costs by 15%.
            Consistently receive high user experience scores for all web
            development projects, including a 55% increase for Flexor, Inc.
            Passionate about building world class web applications. One of my
            sites received a 2020 Webby for Best Navigation and Structure.
          </p>
          <button className="mt-5 bg-transparent border-2 border-amber-400 text-amber-400 px-6 py-2 rounded-full text-sm font-semibold hover:bg-[linear-gradient(89.71deg,#F5BD4D_0.36%,#F89222_99.88%)] hover:text-white hover:border-transparent transition-all duration-300 self-start flex flex-row items-center gap-2">
            Download CV{" "}
            <span className="text-2xl">
              <RiDownloadLine />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
