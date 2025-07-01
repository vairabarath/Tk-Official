import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import animationData from "@/animations/P2P.json"; // adjust path as needed

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6   md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full h-full flex justify-center items-center"
          >
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full max-w-md md:max-w-lg"
            />
          </motion.div>

          <div className="space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet"></span>
                </span>
                Pioneering the Future
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <p className="inline bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Decentralized Intelligence
              </p>{" "}
              for the Connected World
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              We integrate Blockchain, AI, and IoT to create secure, intelligent
              systems that power the next generation of digital infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <Button size="lg" variant="outline">
                Explore now
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
