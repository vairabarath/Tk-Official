import { useState, useEffect, useMemo } from "react";
import Lottie from "lottie-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import blockchainAnimation from "@/animations/blockchain.json";
import brainAnimation from "@/animations/brain.json";
import iotAnimation from "@/animations/network.json";

type FeatureKey = "blockchain" | "ai" | "iot";

type FeatureData = {
  title: string;
  description: string;
  animation: object;
};

const featureData: Record<FeatureKey, FeatureData> = {
  blockchain: {
    title: "Blockchain",
    description:
      "A secure, decentralized protocol that redefines trust. Blockchain ensures transparency, immutability, and verifiability across peer-to-peer networks — powering everything from digital finance to supply chain and identity solutions.",
    animation: blockchainAnimation,
  },
  ai: {
    title: "Artificial Intelligence",
    description:
      "Empower systems to learn, adapt, and evolve. From intelligent automation to real-time decision-making, AI transforms raw data into actionable insights, enabling smarter workflows, faster operations, and hyper-personalized experiences.",
    animation: brainAnimation,
  },
  iot: {
    title: "Internet of Things",
    description:
      "A connected ecosystem of smart devices that sense, communicate, and react in real time. IoT bridges the physical and digital worlds, optimizing environments through automation, data collection, and seamless inter-device coordination.",
    animation: iotAnimation,
  },
};

const featureKeys: FeatureKey[] = ["blockchain", "ai", "iot"];

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureKey>("blockchain");
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isManual) return;

    const interval = setInterval(
      () => {
        setActiveFeature((prev) => {
          const currentIndex = featureKeys.indexOf(prev);
          const nextIndex = (currentIndex + 1) % featureKeys.length;
          return featureKeys[nextIndex];
        });
      },
      isMobile ? 8000 : 6000
    );

    return () => clearInterval(interval);
  }, [isManual]);

  useEffect(() => {
    if (!isManual) return;
    const timeout = setTimeout(() => {
      setIsManual(false);
    }, 30000);

    return () => clearTimeout(timeout);
  }, [isManual]);

  const handleChange = (value: string) => {
    if (value) {
      setIsManual(true);
      setActiveFeature(value as FeatureKey);
    }
  };

  const MemoizedAnimation = useMemo(() => {
    return (
      <Lottie
        animationData={featureData[activeFeature].animation}
        loop
        className="w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-105"
      />
    );
  }, [activeFeature]);

  return (
    <section className="py-16 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Accordion */}
        <div className="relative w-full pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-violet/50" />

          <Accordion
            type="single"
            collapsible
            value={activeFeature}
            onValueChange={handleChange}
          >
            {featureKeys.map((key) => {
              const isActive = activeFeature === key;

              return (
                <div key={key} className="relative mb-12 pl-4">
                  <div
                    className={`absolute -left-[25px] top-7 w-3 h-3 rounded-full z-10 transition-all duration-500 ease-out ${
                      isActive
                        ? "bg-violet scale-125 shadow-lg shadow-violet/70"
                        : "bg-violet"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-violet animate-ping opacity-75" />
                    )}
                  </div>

                  <AccordionItem value={key} className="border-none">
                    <AccordionTrigger
                      className={`text-2xl md:text-3xl font-semibold hover:no-underline transition-all duration-300 ease-out ${
                        isActive
                          ? "text-violet"
                          : "text-foreground hover:text-violet"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {featureData[key].title}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="pt-2 pb-4 space-y-4">
                        <p className="text-muted-foreground text-xl leading-relaxed">
                          {featureData[key].description}
                        </p>

                        {/* ✅ Mobile Animation */}
                        <div className="block md:hidden w-full h-52 sm:h-64 overflow-hidden rounded-lg">
                          <Lottie
                            animationData={featureData[key].animation}
                            loop
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>

        {/* ✅ Desktop Animation (Memoized) */}
        <div className="hidden md:flex w-full h-80 md:h-[400px] justify-center items-center self-start">
          <div className="w-full max-w-md h-full relative overflow-hidden rounded-xl">
            {MemoizedAnimation}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
