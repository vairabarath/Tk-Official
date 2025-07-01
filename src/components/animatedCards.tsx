import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cardData = [
  {
    title: "Empowering Intelligent Futures",
    description:
      "Our mission is to integrate AI into every facet of business, driving smarter operations, predictive insights, and automated efficiency for a future where data works for you.",
    image: "/missions/mission1.png", // Image: Futuristic AI interface, data visualization
  },
  {
    title: "Building Trust Through Decentralization",
    description:
      "We're on a mission to pioneer secure and transparent ecosystems using Blockchain, ensuring immutable data integrity, verifiable transactions, and unparalleled trust across industries.",
    image: "/missions/mission@2.png", // Image: Blockchain network, secure digital lock
  },
  {
    title: "Connecting the World, Intelligently",
    description:
      "Our mission is to deploy cutting-edge IoT solutions that bridge the physical and digital, creating smart environments, optimizing resource management, and enhancing real-time decision-making.",
    image: "/missions/mission3.png", // Image: Connected devices, smart city scape
  },
  {
    title: "Innovating for a Smarter Tomorrow",
    description:
      "United by a vision of technological advancement, we strive to continually innovate, blending AI, Blockchain, and IoT to solve complex challenges and create impactful solutions for humanity.",
    image: "/missions/mission3.png", // Image: Abstract representation of innovation, gears, lightbulb
  },
];

export const AnimatedCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Modified offset: animation starts when section is 80% visible
    // and completes faster to avoid sticky delay
    offset: ["0.2 1", "0.8 0"],
  });

  return (
    <div
      ref={containerRef}
      className="h-[180vh] relative bg-background text-white"
    >
      <div className="sticky top-10 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.h1 className="absolute top-11 text-2xl md:text-4xl font-bold text-primary z-10">
          Missions{" "}
        </motion.h1>
        {cardData.map((card, index) => {
          // Responsive intervals: reduced gap and slower speed
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;
          const interval = isMobile ? 0.12 : 0.15; // Reduced gap between cards
          const duration = isMobile ? 0.5 : 0.5; // Slower transitions for better visibility

          const start = index * interval;
          const mid = start + duration * 0.5;
          const end = start + duration;
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
          const opacity = useTransform(scrollYProgress, inputRange, [1, 1, 1]);
          const scale = useTransform(
            scrollYProgress,
            inputRange,
            [0.95, 1, 0.95]
          );

          return (
            <motion.div
              key={index}
              style={{ x, y, rotate, opacity, scale }}
              className="absolute origin-center flex flex-col md:flex-row items-center gap-6"
            >
              {/* Image Card */}
              <div className="w-[350px] max-w-[90vw] rounded-2xl p-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              {/* Description */}
              <div className="max-w-[300px] text-left bg-transparent border shadow-blue-300 shadow-md rounded-2xl p-4">
                <p className="text-lg text-primary text-left">
                  {card.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
