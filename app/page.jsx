"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Hero from "@/Components/Hero";
import BlogGrid from "@/Components/BlogGrid";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <ClerkProvider>
      <ToastContainer theme="dark" />
      <Hero />
      <BlogGrid />
      <Footer />
    </ClerkProvider>
  );
}
