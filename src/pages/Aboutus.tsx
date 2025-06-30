import { AnimatedCards } from "@/components/animatedCards";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "motion/react";

const Aboutus = () => {
  return (
    <div>
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br md:w-[800px] from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-4xl"
        >
          {/* <h1 className="text-4xl font-bold text-primary dark:text-cyan-400  ">
            What we do
          </h1> */}
          <p className="">
            Empowering a smarter, safer, and decentralized world through
            Blockchain, AI, and IoT.
          </p>
        </motion.div>
      </LampContainer>
      <section className="h-[400vh] relative bg-background text-white">
        <AnimatedCards />
      </section>
    </div>
  );
};

export default Aboutus;
