import React from "react";
import Image from "next/image";
import { FaLink } from "react-icons/fa";

const categories = [
  "All",
  "Graphic Design",
  "Mobile App",
  "Photography",
  "UI/UX Design",
];

type PortfolioItemProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  large?: boolean;
};

const PortfolioItem = ({
  title,
  subtitle,
  imageSrc,
  large,
}: PortfolioItemProps) => {
  return (
    <div
      className={`relative bg-[#000000] rounded-md overflow-hidden group flex flex-col h-full ${
        large ? "" : ""
      }`}
    >
      <div className="relative flex-1 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-50"
          width={1000}
          height={1000}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="text-center px-4">
            <h3 className="text-sm font-semibold mb-1 text-white">{title}</h3>
            {subtitle && <p className="text-xs text-gray-300">{subtitle}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

function Portfolio() {
  return (
    <section className="mt-16 px-8 flex flex-row justify-end items-start">
      <section className="w-3/4 px-12">
        <h2 id="portfolio" className="text-3xl font-semibold mb-6">
          Portfolio
        </h2>

        <div className="bg-[#101211] rounded-md px-4 py-3 mb-6 flex flex-wrap gap-4 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className="relative text-sm transition-colors cursor-pointer text-white font-semibold hover:text-amber-400 hover:underline-offset-4 hover:underline"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[220px]">
          <div className="row-span-1">
            <PortfolioItem
              title="Smart watch UI"
              subtitle="Product shot"
              imageSrc="/portfolio-1.png"
            />
          </div>

          <div className="row-span-1">
            <PortfolioItem
              title="Shopping bag"
              subtitle="Branding & packaging"
              imageSrc="/portfolio-1.png"
            />
          </div>

          <div className="row-span-2">
            <PortfolioItem
              large
              title="Figma Mockup"
              subtitle="Figma mockup PSD editable"
              imageSrc="/portfolio-1.png"
            />
          </div>

          <div className="row-span-1">
            <PortfolioItem
              title="Mobile app"
              subtitle="Finance application"
              imageSrc="/portfolio-1.png"
            />
          </div>

          <div className="row-span-1">
            <PortfolioItem
              title="Website design"
              subtitle="Fitness Studio Website"
              imageSrc="/portfolio-1.png"
            />
          </div>

          <div className="row-span-1">
            <PortfolioItem
              title="Coffee mug"
              subtitle="Brand identity"
              imageSrc="/portfolio-1.png"
            />
          </div>

          <div className="row-span-1">
            <PortfolioItem
              title="Graphic Design"
              subtitle="Design Project"
              imageSrc="/portfolio-1.png"
            />
          </div>

          <div className="row-span-1">
            <a
              href="#"
              className="relative bg-black rounded-md px-6 py-10 flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
            >
              <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#121414] flex items-center justify-center border border-[#2a2a2a]">
                <FaLink className="text-xs text-white" />
              </button>
              <div className="text-center">
                <h3 className="text-sm font-semibold mb-1 text-white">
                  Website design
                </h3>
                <p className="text-xs text-gray-400">Fitness Studio Website</p>
              </div>
            </a>
          </div>

          <div className="row-span-1">
            <a
              href="#"
              className="relative bg-black rounded-md px-6 py-10 flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
            >
              <button className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#121414] flex items-center justify-center border border-[#2a2a2a]">
                <FaLink className="text-xs text-white" />
              </button>
              <div className="text-center">
                <h3 className="text-sm font-semibold mb-1 text-white">
                  Photography
                </h3>
                <p className="text-xs text-gray-400">Photography Project</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Portfolio;
