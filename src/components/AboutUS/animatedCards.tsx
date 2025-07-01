import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cardData = [
  {
    title: "Empowering Intelligent Futures",
    description:
      "Our mission is to integrate AI into every facet of business, driving smarter operations, predictive insights, and automated efficiency for a future where data works for you.",
    image: "/missions/mission1.png",
  },
  {
    title: "Building Trust Through Decentralization",
    description:
      "We're on a mission to pioneer secure and transparent ecosystems using Blockchain, ensuring immutable data integrity, verifiable transactions, and unparalleled trust across industries.",
    image: "/missions/mission@2.png",
  },
  {
    title: "Connecting the World, Intelligently",
    description:
      "Our mission is to deploy cutting-edge IoT solutions that bridge the physical and digital, creating smart environments, optimizing resource management, and enhancing real-time decision-making.",
    image: "/missions/mission3.png",
  },
  {
    title: "Innovating for a Smarter Tomorrow",
    description:
      "United by a vision of technological advancement, we strive to continually innovate, blending AI, Blockchain, and IoT to solve complex challenges and create impactful solutions for humanity.",
    image: "/missions/mission3.png",
  },
];

export const AnimatedCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Extended offset to ensure last card completes animation
    offset: ["0.1 1", "1 0"],
  });

  return (
    <div
      ref={containerRef}
      // Increased container height to give more scroll space
      className="relative bg-background text-foreground h-[300vh] md:h-[350vh] lg:h-[280vh]"
    >
      <div className="sticky top-10 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.h1 className="absolute top-11 text-2xl md:text-4xl font-bold text-primary z-10">
          Missions{" "}
        </motion.h1>
        {cardData.map((card, index) => {
          // Responsive intervals with better timing
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 768;
          const interval = isMobile ? 0.29 : 0.18; // Slightly increased interval
          const duration = isMobile ? 0.59 : 0.5; // Shorter duration for smoother transitions

          const start = index * interval;
          const mid = start + duration * 0.5;
          const end = start + duration;

          // Ensure the last card has enough time to complete
          const totalAnimationTime =
            (cardData.length - 1) * interval + duration;
          const normalizedStart = start / totalAnimationTime;
          const normalizedMid = mid / totalAnimationTime;
          const normalizedEnd = end / totalAnimationTime;

          const inputRange = [normalizedStart, normalizedMid, normalizedEnd];

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
