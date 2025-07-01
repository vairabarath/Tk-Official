import Lottie from "lottie-react";
import crypto from "@/animations/crypto.json";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-background text-foreground py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            The Future of Blockchain Starts Now
          </h1>
          <p className="text-lg text-neutral-400 mb-6 max-w-xl">
            Build decentralized, secure, and scalable applications with smart
            contracts, tokens, and cryptographic systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
              Launch DApp
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-500 hover:bg-blue-900/20 rounded-md transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Lottie Animation */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Lottie animationData={crypto} loop className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}
