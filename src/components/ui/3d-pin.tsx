import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  themeColor = "purple",
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  themeColor?: "blue" | "purple" | "green";
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );
  const [isActive, setIsActive] = useState(false);

  const onTouchStart = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    setIsActive(true);
  };

  const onTouchEnd = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    setIsActive(false);
  };

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <a
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href || "/"}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className={cn(
            "absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-background transition duration-700 overflow-hidden border",
            getBorderColorClass(themeColor)
          )}
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective
        title={title}
        themeColor={themeColor}
        isActive={isActive}
      />
    </a>
  );
};

const getBorderColorClass = (color: string) => {
  switch (color) {
    case "blue":
      return "border-[#3b82f6] group-hover/pin:border-[#3b82f6]";
    case "green":
      return "border-[#00fdb9] group-hover/pin:border-[#00fdb9]";
    case "purple":
    default:
      return "border-[#6366f1] group-hover/pin:border-[#6366f1]";
  }
};

const getGradientColorClass = (color: string) => {
  switch (color) {
    case "blue":
      return "from-blue-400/0 via-blue-400/90 to-blue-400/0";
    case "green":
      return "from-emerald-400/0 via-emerald-400/90 to-emerald-400/0";
    case "purple":
    default:
      return "from-purple-400/0 via-purple-400/90 to-purple-400/0";
  }
};

export const PinPerspective = ({
  title,
  themeColor = "purple",
  isActive = false,
}: {
  title?: string;
  themeColor?: "blue" | "purple" | "green";
  isActive?: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-none w-96 h-80 flex items-center justify-center z-[60] transition duration-500",
        isActive ? "opacity-100" : "opacity-0",
        "group-hover/pin:opacity-100"
      )}
    >
      <div className=" w-full h-full -mt-7 flex-none  inset-0">
        <div className="absolute top-0 inset-x-0  flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-background py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="relative z-20 text-foreground text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span
              className={cn(
                "absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] transition-opacity duration-500 group-hover/btn:opacity-40",
                "bg-gradient-to-r",
                getGradientColorClass(themeColor)
              )}
            ></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
        </>
      </div>
    </motion.div>
  );
};
