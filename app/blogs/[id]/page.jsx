"use client";

import Footer from "@/Components/Footer";
import BarLoader from "@/Components/Loader";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "@/Components/particles";
import { useTheme } from "next-themes";
import { FiArrowRight } from "react-icons/fi";

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
          quantity={40}
          ease={0}
          color={color}
          refresh
        />

        <div className="relative z-10 flex justify-between items-center">
          <div className="flex flex-row">
          <Link href="/" className="flex flex-row justify-center items-center gap-2 font-semibold ">
            <Image src={"/logo.png"} width={50} height={50} alt="logo"/>
            <h1 className="text-base">StockHub</h1>
          </Link>
        </div>

          <Link href={"/admin"}>
            <button className="group flex h-10 items-center gap-2 rounded-full bg-neutral-300 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700">
              <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
              </span>
              <span>Admin</span>
            </button>
          </Link>
        </div>

        <div className="relative z-10 text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
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
