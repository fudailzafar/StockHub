"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const generateParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

export default function Particles({
  quantity = 50,
  color = "white",
  size = 1,
  className = "",
}) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(quantity));
  }, [quantity]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            opacity: 0,
            y: 0,
            x: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -50],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            duration: p.duration,
            delay: p.delay,
          }}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size * size}px`,
            height: `${p.size * size}px`,
            backgroundColor: color,
            opacity: 0.2,
          }}
        />
      ))}
    </div>
  );
}
