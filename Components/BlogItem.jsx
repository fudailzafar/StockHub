"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "./magicui/magic-card";
import { ArrowRight } from "lucide-react";

const BlogItem = ({ title, description, category, image, id }) => {
  const { theme } = useTheme();
  return (
    <MagicCard
      className="max-w-[330px] min-h-[450px] sm:max-w-[300px] bg-white border"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <Link href={`/blogs/${id}`}>
        {" "}
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-black rounded-t-xl"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5 flex flex-col">
        <h5 className="mb-2 text-large font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p
          className="mb-3 text-sm tracking-tight text-gray-700"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
        ></p>
        <Link
          href={`/blogs/${id}`}
          className="flex items-center justify-center absolute bottom-4 left-4 right-4 z-20 rounded-3xl border-2 border-white bg-black py-2 text-center font-mono font-black uppercase text-white backdrop-blur transition-colors hover:bg-white hover:text-black hover:border hover:border-black"
        >
          Read more{" "}
          <ArrowRight width={15} className="ml-2"/>
        </Link>
      </div>
    </MagicCard>
  );
};

export default BlogItem;
