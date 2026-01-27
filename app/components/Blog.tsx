import React from "react";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    category: "Photography",
    date: "18 Apr 2022",
    title: "The artist vocation is to send light into the human heart.",
    imageSrc: "/portfolio-2.png",
  },
  {
    category: "Adventure",
    date: "18 Apr 2022",
    title: "The mission of art is to represent nature not to imitate her.",
    imageSrc: "/portfolio-2.png",
  },
  {
    category: "Graphic design",
    date: "18 Apr 2022",
    title: "There are countless versions of lorem ipsum, the most famous.",
    imageSrc: "/portfolio-2.png",
  },
  {
    category: "Travel",
    date: "18 Apr 2022",
    title: "The principles of true art is not to portray, but to evoke.",
    imageSrc: "/portfolio-2.png",
  },
  {
    category: "Design",
    date: "18 Apr 2022",
    title: "UI interactions of the week.",
    imageSrc: "/portfolio-2.png",
  },
  {
    category: "Travel",
    date: "18 Apr 2022",
    title: "Party jokes starting but unnecessary.",
    imageSrc: "/portfolio-2.png",
  },
];

function Blog() {
  return (
    <section className=" px-8 flex flex-row justify-end items-start">
      <section className="w-3/4 px-12">
        <h2 id="blog" className="text-3xl font-semibold mb-6">
          Blog
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-5 md:grid-cols-1 h-full">
            {posts.slice(0, 3).map((post) => (
              <article
                key={post.title}
                className="bg-[#000000] rounded-md overflow-hidden flex flex-col"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-4 text-xs text-gray-400">
                  <p className="mb-1">
                    {post.category} • {post.date}
                  </p>
                  <h3 className="text-sm text-white font-semibold mb-3">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="mb-3">
                    Lorem ipsum is simply dummy text in the printing typesetting
                    industry. Lorem ipsum has been{" "}
                  </p>
                  <p className="text-[11px] text-amber-400">
                    — Posted by Daryl Smith
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-5 md:grid-cols-1 h-[90%]">
            {posts.slice(3, 6).map((post) => (
              <article
                key={post.title}
                className="bg-[#000000] rounded-md overflow-hidden flex flex-col"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="px-5 py-4 text-xs text-gray-400">
                  <p className="mb-1">
                    {post.category} • {post.date}
                  </p>
                  <h3 className="text-sm text-white font-semibold mb-3">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  <p className="mb-3">
                    Lorem ipsum is simply dummy text in the printing typesetting
                    industry. Lorem ipsum has been{" "}
                  </p>
                  <p className="text-[11px] text-amber-400">
                    — Posted by Daryl Smith
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Blog;
