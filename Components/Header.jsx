"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { Cookie } from "next/font/google";
import { LineShadowText } from "./magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ShinyButton } from "./magicui/shiny-button";
import { MorphingText } from "./magicui/morphing-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { Particles } from "./magicui/particles";

const texts = [
  "StockHub",
  "One Stop Guide",
  "Stock Markets",
  "Personal Finance",
  "Real Estate",
  "Commodities & Gold",
  "Tax Systems",
  "Forex Trading",
];

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
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
    <div className="mb-10 md:mb-0 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-4xl font-bold">
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
      <div className="text-center my-28">
        <div className="z-10 flex min-h-10 items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black bg-neutral-100 text-base text-white transition-all ease-in cursor-default hover:bg-neutral-200"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-black hover:text-black hover:duration-300">
              <span>✨ Introducing New UI</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>

        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />

        <h1 className="text-3xl sm:text-8xl font-medium">
          <MorphingText texts={texts} />
        </h1>
        <p className="mt-10 md:mt-28 max-w-[740px] m-auto text-xs sm:text-base md:text-lg">
          Your one stop guide to learn about the <b>stock markets</b>! People
          think that investing in stock markets is risky, deadly, and what not!
          But StockHub is here to teach you how to{" "}
          <b>buy the castle you always wanted!</b> Welcome to the{" "}
          <b>MoneyLand!</b>
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between border-l rounded-3xl max-w-[500px] scale-75 sm:scale-100 mx-auto mt-5 md:mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
          action=""
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="weekly newsletter..."
            className="pl-4 rounded-l-3xl outline-none w-full"
          />
          <button type="submit">
            <ShinyButton className="border-l rounded-none rounded-r-3xl border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white">
              Subscribe
            </ShinyButton>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
