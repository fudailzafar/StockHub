"use client";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import BarLoader from "@/Components/BarLoader";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { InteractiveHoverButton } from "../../../Components/magicui/interactive-hover-button";
import { LineShadowText } from "../../../Components/magicui/line-shadow-text";
import { useTheme } from "next-themes";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: { id: params.id },
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-4xl font-bold">
              Stock
              <LineShadowText className="italic" shadowColor={shadowColor}>
                Hub
              </LineShadowText>
            </h1>
          </Link>

          <Link href={"/admin"}>
            <InteractiveHoverButton className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6">
              Admin
            </InteractiveHoverButton>
          </Link>
        </div>
        <div className="text-center my-24">
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
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
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

        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share this article on Social Media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="Facebook" />
            <Image src={assets.twitter_icon} width={50} alt="Twitter" />
            <Image src={assets.googleplus_icon} width={50} alt="Google+" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <BarLoader /> // Loading state
  );
};

export default page;
