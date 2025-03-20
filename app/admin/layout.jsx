"use client";

import Sidebar from "@/Components/AdminComponents/Sidebar";
import { ClerkProvider, SignOutButton, UserButton } from "@clerk/nextjs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }) {
  return (
    <>
      <ClerkProvider>
        <div className="flex">
          <ToastContainer theme="dark" />
          <Sidebar />
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full py-4 max-h-[60px] px-12 border-b border-black gap-3 md:gap-0">
              <h3 className="font-medium md:text-xl">Admin Panel</h3>
              <UserButton afterSignOutUrl="/" />
            </div>
            {children}
          </div>
        </div>
      </ClerkProvider>
    </>
  );
}
