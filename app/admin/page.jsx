"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "../../Components/magicui/particles";

export default function AdminPage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-4xl sm:text-8xl font-semibold leading-none">
        Admin Page
      </span>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
