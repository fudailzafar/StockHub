"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { LineShadowText } from "./line-shadow-text";
import { MorphingText } from "./morphing-text";
import { AnimatedShinyText } from "./animated-shiny-text";
import Particles from "./particles";
import { ArrowRight } from "lucide-react";

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

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#f3f4f6");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#f5f5f5"); // or even lighter like "#f9fafb"
  }, [resolvedTheme]);

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
        <Link href="/">
          <h1 className="text-2xl font-bold">
            Stock
            <LineShadowText className="italic" shadowColor={shadowColor}>
              Hub
            </LineShadowText>
          </h1>
        </Link>

        <Link href="/admin">
          <button className="px-6 py-2 border-2 border-black font-medium bg-white text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
            Login
          </button>
        </Link>
      </div>

      <div className="text-center my-36">
        <div className="z-10 flex min-h-10 items-center justify-center mb-6 md:mb-0">
          <div className="group rounded-full border border-black bg-neutral-100 text-base text-white transition-all ease-in cursor-default hover:bg-neutral-200">
            <button onClick={() => setIsOpen(true)}>
              <AnimatedShinyText className="inline-flex items-center justify-center px-3 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span className="text-sm">✨ Introducing New UI</span>
                <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <Particles
          className="absolute inset-0 z-0"
          quantity={40}
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
          className="relative flex items-center rounded-3xl max-w-[500px] scale-75 sm:scale-100 mx-auto mt-5 md:mt-10 border border-gray-400 shadow-[-7px_7px_0px_#000000] md:hover:-translate-y-2 transition-all md:shadow-none md:hover:shadow-[-5px_5px_0px_#000000]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Weekly Newsletter!"
            className="w-full p-4 pr-32 pl-4 rounded-3xl outline-none"
          />

          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow-md"
          >
            Subscribe
          </button>
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
            <FiAlertCircle className="text-white/40 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
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
                    📢 <strong>New Domain:</strong> StockHub has moved to{" "}
                    <strong>stockhub.in</strong> for a more localized and
                    seamless experience.
                  </li>
                  <li>
                    📂 <strong>New Category – Personal Finance:</strong> We've
                    added a dedicated <strong>Personal Finance</strong> category
                    to help you manage your money better.
                  </li>
                  <li>
                    🎨 <strong>Brand-New UI:</strong> Enjoy a refreshed, modern
                    design that makes navigating StockHub smoother and more
                    intuitive than ever!
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

export default Hero;
