
import Link from "next/link";
import { LineShadowText } from "./line-shadow-text";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DotExpandButton from "./DotExpandButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#f3f4f6");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#f5f5f5"); // or even lighter like "#f9fafb"
  }, [resolvedTheme]);
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <div className="bg-transparent p-2 md:p-5 ">
      <div className="flex justify-between items-center text-white">
        <Link href="/">
          <h1 className="md:text-2xl font-bold ">
            Stock
            <LineShadowText className="italic" shadowColor={shadowColor}>
              Hub
            </LineShadowText>
          </h1>
        </Link>

        <Link href="/admin">
          <DotExpandButton />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
