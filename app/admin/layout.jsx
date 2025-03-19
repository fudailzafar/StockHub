"use client";
import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import { ClerkProvider, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useClerk } from "@clerk/nextjs";
import { RippleButton } from "@/Components/magicui/ripple-button";

export default function Layout({ children }) {
  return (
    <>
      <ClerkProvider>
        <div className="flex">
          <ToastContainer theme="dark" />
          <Sidebar />
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
              <h3 className="font-medium">Admin Panel</h3>
              <SignOutButton>
                <RippleButton rippleColor="#ADD8E6">Sign Out</RippleButton>
              </SignOutButton>
            </div>
            {children}
          </div>
        </div>
      </ClerkProvider>
    </>
  );
}
