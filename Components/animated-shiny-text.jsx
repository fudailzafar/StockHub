"use client";

import { motion } from "framer-motion";

export const AnimatedShinyText = ({
  children,
  className = "",
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <motion.span
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        "--shiny-width": `${shimmerWidth}px`,
      }}
      className={`relative mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70
      bg-clip-text bg-no-repeat bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80
      ${className}`}
      {...props}
    >
      {children}
    </motion.span>
  );
};
