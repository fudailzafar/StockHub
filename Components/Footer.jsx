import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { LineShadowText } from "./magicui/line-shadow-text";
import { useTheme } from "next-themes";

const Footer = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Link href="/">
        <h1 className="text-white text-xl font-semibold">
          Stock
          <LineShadowText className="italic" shadowColor={shadowColor}>
            Hub
          </LineShadowText>
        </h1>
      </Link>
      <p className="text-md font-medium text-white">
        © Copyright 2025. All rights reserved.
      </p>
      <div className="flex gap-3">
        <Link href="https://www.facebook.com/">
          <Facebook className="text-white" />
        </Link>
        <p className="text-white">|</p>
        <Link href="https://www.instagram.com/">
          <Instagram className="text-white" />
        </Link>
        <p className="text-white">|</p>

        <Link href="https://x.com/">
          <Twitter className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
