"use client";
import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cookie } from "next/font/google";
import { LineShadowText } from "../magicui/line-shadow-text";
import { useTheme } from "next-themes";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Sidebar = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Link href={"/"}>
          <h1 className="text-[23px] font-semibold">
            Stock
            <LineShadowText className="italic" shadowColor={shadowColor}>
              Hub
            </LineShadowText>
          </h1>
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.add_icon} alt="" width={28} /> <p>Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.blog_icon} alt="" width={28} /> <p>Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
          >
            <Image src={assets.email_icon} alt="" width={28} />{" "}
            <p>Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
