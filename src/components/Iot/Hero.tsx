import Lottie from "lottie-react";
import iotAnimation from "@/animations/iot.json";
import { motion } from "framer-motion";

const iotHero = () => {
  return (
    <section className="w-full bg-background text-foreground px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Powering the Future with IoT
          </h1>
          <p className="text-lg text-neutral-400 mb-6 max-w-xl">
            Connect devices, gather real-time data, and automate processes at
            scale with the Internet of Things.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              className="px-6 py-3 text-black hover:bg-[#00fdb9] rounded-md transition"
              style={{ backgroundColor: "#00fdb9" }}
            >
              Get Started
            </button>
            <button
              className="px-6 py-3 border text-[#00fdb9] hover:bg-[#00fdb9]/20 rounded-md transition"
              style={{ borderColor: "#00fdb9" }}
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Lottie animationData={iotAnimation} loop className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default iotHero;
