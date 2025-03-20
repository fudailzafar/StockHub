"use client";

import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <ToastContainer theme="dark" />
      <Header />
      <BlogList />
      <Footer />
    </ClerkProvider>
  );
}
