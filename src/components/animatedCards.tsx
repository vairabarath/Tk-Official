"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cardData = [
  {
    title: "Joy",
    description:
      "Passion and enthusiasm are contagious. Clients and partners tell us we bring a sense of fun to what we do...",
    image: "/images/joy.jpg",
  },
  {
    title: "Courage",
    description:
      "We embrace challenges and take bold steps. Courage drives us to innovate and push limits.",
    image: "/images/courage.jpg",
  },
  {
    title: "Wisdom",
    description:
      "With experience comes wisdom. Our insights guide decisions that shape the future.",
    image: "/images/wisdom.jpg",
  },
  {
    title: "Empathy",
    description:
      "We understand, we care. Empathy builds trust, and trust builds relationships.",
    image: "/images/empathy.jpg",
  },
];

export const AnimatedCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="h-[400vh] relative bg-gradient-to-br from-[#1f1f1f] to-[#2b2b40] text-white"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {cardData.map((card, index) => {
          const start = index * 0.2;
          const mid = start + 0.15;
          const end = start + 0.3;

          const inputRange = [start, mid, end];

          const x = useTransform(scrollYProgress, inputRange, [
            "100vw",
            "0vw",
            "-100vw",
          ]);
          const y = useTransform(scrollYProgress, inputRange, [
            "120px",
            "0px",
            "-100px",
          ]);
          const rotate = useTransform(scrollYProgress, inputRange, [
            "15deg",
            "0deg",
            "-10deg",
          ]);
          const opacity = useTransform(scrollYProgress, inputRange, [0, 1, 0]);
          const scale = useTransform(
            scrollYProgress,
            inputRange,
            [0.95, 1, 0.95]
          );

          return (
            <motion.div
              key={index}
              style={{ x, y, rotate, opacity, scale }}
              className="absolute origin-center w-[350px] max-w-[90vw] p-6 bg-white text-black rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.25)] flex flex-col items-center gap-4"
            >
              <img
                src={card.image}
                alt={card.title}
                className="rounded-xl w-full h-[200px] object-cover"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
