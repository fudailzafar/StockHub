"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import BlogGrid from "@/Components/BlogGrid";
import Footer from "@/Components/Footer";
import { DarkGridHero } from "@/Components/DarkGridHero";
import { useRef } from "react";

export default function Home() {
  const blogRef = useRef(null);
  return (
    <ClerkProvider>
      <ToastContainer theme="dark" />
      <div className="md:mb-1 py-0 px-0">
        <DarkGridHero
          scrollToBlog={() =>
            blogRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div ref={blogRef}>
        <BlogGrid />
      </div>
      <Footer />
    </ClerkProvider>
  );
}
