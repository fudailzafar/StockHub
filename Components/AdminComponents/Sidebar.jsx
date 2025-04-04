"use client";

import Link from "next/link";
import React from "react";
import { LineShadowText } from "../line-shadow-text";
import { useTheme } from "next-themes";
import { CirclePlus, FilePenLine, Mail } from "lucide-react";

const Sidebar = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Link href={"/"}>
          <h1 className="text-[22px] sm:text-[23px] sm:font-semibold">
            Stock
            <LineShadowText className="italic" shadowColor={shadowColor}>
              Hub
            </LineShadowText>
          </h1>
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-full relative py-6 sm:py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] mx-auto">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-black gap-3 rounded-xl md:rounded-3xl font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] md:hover:-translate-y-2 transition-all md:shadow-none md:hover:shadow-[-5px_5px_0px_#000000]"
          >
            <CirclePlus width={28} />
            <p className="hidden sm:block">Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-black gap-3 rounded-xl md:rounded-3xl font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] md:hover:-translate-y-2 transition-all md:shadow-none md:hover:shadow-[-5px_5px_0px_#000000]"
          >
            <FilePenLine width={28} />
            <p className="hidden sm:block">Blog lists</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-black gap-3 rounded-xl md:rounded-3xl font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000] md:hover:-translate-y-2 transition-all md:shadow-none md:hover:shadow-[-5px_5px_0px_#000000]"
          >
            <Mail width={28} />
            <p className="hidden sm:block">Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
