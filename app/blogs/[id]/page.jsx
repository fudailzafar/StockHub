"use client";

import Footer from "@/Components/Footer";
import BarLoader from "@/Components/BarLoader";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { InteractiveHoverButton } from "../../../Components/magicui/interactive-hover-button";
import { LineShadowText } from "../../../Components/magicui/line-shadow-text";
import { TextAnimate } from "@/Components/magicui/text-animate";
import { Particles } from "@/Components/magicui/particles";
import { useTheme } from "next-themes";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const response = await axios.get("/api/blog", {
        params: { id: params.id },
      });
      setData(response.data);
    };

    fetchBlogData();
  }, []);

  const { resolvedTheme } = useTheme();
  const shadowColor = resolvedTheme === "dark" ? "white" : "black";
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return data ? (
    <>
      <div className="relative bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        {/* Particles in the background */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />

        <div className="relative z-10 flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-2xl md:text-4xl font-bold">
              Stock
              <LineShadowText className="italic" shadowColor={shadowColor}>
                Hub
              </LineShadowText>
            </h1>
          </Link>

          <Link href={"/admin"}>
            <InteractiveHoverButton className="flex items-center gap-2 font-medium py-1 px-5 sm:py-3 sm:px-6">
              Admin
            </InteractiveHoverButton>
          </Link>
        </div>

        <div className="relative z-10 text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            <TextAnimate>{data.title}</TextAnimate>
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            width={60}
            height={60}
            alt="Author Image"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt="Blog Image"
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>
      <Footer />
    </>
  ) : (
    <BarLoader /> // Loading state
  );
};

export default page;
