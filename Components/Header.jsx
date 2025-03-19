"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { Cookie } from "next/font/google";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { LineShadowText } from "./magicui/line-shadow-text";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { ShinyButton } from "./magicui/shiny-button";
import { MorphingText } from "./magicui/morphing-text";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";
import { Particles } from "./magicui/particles";
import { BorderBeam } from "./magicui/border-beam";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const texts = [
  "StockHub",
  "One Guide",
  "Equities",
  "Finance",
  "Real Estate",
  "Commodities",
  "Tax Systems",
  "Forex",
];

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="md:mb-0 py-5 px-5 md:px-12 lg:px-28">
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
          <InteractiveHoverButton className="flex items-center gap-2 font-medium py-1 px-5 sm:py-3 sm:px-6">
            Login
          </InteractiveHoverButton>
        </Link>
      </div>
      <div className="text-center my-36">
        <div className="z-10 flex min-h-10 items-center justify-center mb-6 md:mb-0">
          <div
            className={cn(
              "group rounded-full border border-black bg-neutral-100 text-base text-white transition-all ease-in cursor-default hover:bg-neutral-200"
            )}
          >
            <button onClick={() => setIsOpen(true)}>
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing New UI</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
        <p className="mt-4 max-w-[740px] m-auto text-sm sm:text-base md:text-lg text-center">
          Your one stop guide to learn about the <b>stock markets</b>! People
          think that investing in stock markets is risky, deadly, and what not!
          But StockHub is here to teach you how to{" "}
          <b>buy the castle you always wanted!</b> Welcome to the{" "}
          <b>MoneyLand!</b>
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between border-l rounded-3xl max-w-[500px] scale-75 sm:scale-100 mx-auto mt-5 md:mt-10 border border-gray-400 shadow-[-7px_7px_0px_#000000] md:hover:-translate-y-2 transition-all md:shadow-none md:hover:shadow-[-5px_5px_0px_#000000]"
          action=""
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Weekly Newsletter!"
            className="pl-4 rounded-l-3xl outline-none w-full"
          />
          <ShinyButton
            type="submit"
            className="border-l rounded-none rounded-r-3xl border-gray-500 py-4 px-4 sm:px-8"
          >
            <span>Subscribe</span>
          </ShinyButton>
          <BorderBeam duration={8} size={100} />
        </form>
      </div>
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-black text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/85 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-black grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Latest Update!
              </h3>
              <p className="text-justify mb-6">
                <ul>
                  <li>
                    - We've introduced a brand new authentication system to
                    enhance security and streamline access!
                  </li>
                  <li>
                    - StockHub now has a fresh domain: <b>stockhub.fun</b>,
                    making it easier than ever to find and use our platform.
                  </li>
                  <li>
                    - These updates ensure a seamless and secure experience
                    across all devices. Enjoy the new and improved StockHub!
                  </li>
                </ul>
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                >
                  Yay!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
