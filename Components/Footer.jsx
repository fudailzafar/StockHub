import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Link href="/">
        <h1 className="text-white">StockHub</h1>
      </Link>
      <p className="text-sm text-white">
        All rights reserved. © Copyright @StockHub
      </p>
      <div className="flex gap-2">
        <Link href="https://www.facebook.com/">
          <Facebook className="text-white"/>
        </Link>
        <Link href="https://www.instagram.com/">
        <Instagram className="text-white"/>
        </Link>
        <Link href="https://x.com/">
          <Twitter className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
