import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aiLottie from "@/animations/ai.json"; // Use your own AI Lottie JSON
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-background text-foreground px-4 md:px-12 lg:px-24 w-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 to-fuchsia-600 text-transparent bg-clip-text">
            Empowering the Future with AI
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Build, deploy, and scale intelligent systems that transform your
            data into real-world decisions. AI that thinks with you.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Get Started
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </motion.div>

        {/* Lottie Animation */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Lottie animationData={aiLottie} loop className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
