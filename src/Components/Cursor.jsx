import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const mouseMove = (e) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

  return (
    <motion.div
      animate={{
        x: mousePosition.x - 15,
        y: mousePosition.y - 15,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="
      fixed
      top-0
      left-0
      w-8
      h-8
      rounded-full
      bg-cyan-400/30
      border
      border-cyan-400
      backdrop-blur-md
      pointer-events-none
      z-[9999]
      "
    />
  );
}