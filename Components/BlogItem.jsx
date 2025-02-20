"use client";

import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "./magicui/magic-card";

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
        <div className="p-5">
          <h5 className="mb-2 text-large font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p
            className="mb-3 text-sm tracking-tight text-gray-700"
            dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
          ></p>
          <Link
            href={`/blogs/${id}`}
            className="inline-flex items-center py-2 font-semibold text-center"
          >
            Read more{" "}
            <Image src={assets.arrow} className="ml-2" alt="" width={12} />
          </Link>
        </div>
      
    </MagicCard>
  );
};

export default BlogItem;
