"use client";
import { assets } from "@/Assets/assets";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { Cookie } from "next/font/google";
import { LineShadowText } from "./magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ShinyButton } from "./magicui/shiny-button";
import { MorphingText } from "./magicui/morphing-text";

const texts = [
  "StockHub",
  "One Stop Guide",
  "Stocks",
  "Personal Finance",
  "Real Estate",
  "Commodities",
  "Tax",
  "Forex",
  "Cryptocurrency",
];

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
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
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-8xl font-medium">
          <MorphingText texts={texts} />
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base md:text-lg">
          Your one stop guide to learn about the <b>stock markets</b>! People
          think that investing in stock markets is risky, deadly, and what not!
          But StockHub is here to teach you how to{" "}
          <b>buy the castle you always wanted!</b> Welcome to the{" "}
          <b>MoneyLand!</b>
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
          action=""
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Weekly Newsletter"
            className="pl-4 outline-none"
          />
          <button type="submit">
            <ShinyButton className="border-l rounded-none border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
              Subscribe
            </ShinyButton>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
