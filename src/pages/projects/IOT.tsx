// pages/iot.tsx

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import iotAnimation from "@/animations/iot.json";
import {
  SatelliteDish,
  Wifi,
  Router,
  Activity,
  CloudLightning,
  SignalHigh,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";
import type { Variants } from "framer-motion";
import { Grid } from "@/components/Grid";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
const features: Feature[] = [
  {
    title: "Connected Devices",
    description:
      "Seamless integration of smart sensors and devices across environments.",
    icon: <SatelliteDish className="h-8 w-8 text-[#00fdb9]" />,
  },
  {
    title: "Wireless Communication",
    description:
      "Real-time data transmission using protocols like MQTT, LoRa, and Zigbee.",
    icon: <Wifi className="h-8 w-8 text-[#00fdb9]" />,
  },
  {
    title: "Edge Computing",
    description:
      "Process data locally for faster response and reduced latency.",
    icon: <Router className="h-8 w-8 text-[#00fdb9]" />,
  },
  {
    title: "Monitoring & Control",
    description:
      "Centralized dashboards and automation for industrial and home IoT.",
    icon: <Activity className="h-8 w-8 text-[#00fdb9]" />,
  },
  {
    title: "Cloud Integration",
    description:
      "Secure cloud pipelines to aggregate, analyze, and act on IoT data.",
    icon: <CloudLightning className="h-8 w-8 text-[#00fdb9]" />,
  },
  {
    title: "Scalability",
    description:
      "Robust infrastructure designed to scale with growing IoT ecosystems.",
    icon: <SignalHigh className="h-8 w-8 text-[#00fdb9]" />,
  },
  {
    title: "Device Lifecycle Management",
    description:
      "From provisioning to decommissioning — manage devices the smart way.",
    icon: <PackageCheck className="h-8 w-8 text-[#00fdb9]" />,
  },
  {
    title: "End-to-End Security",
    description:
      "Secure boot, OTA updates, and AES-256 encryption baked in by default.",
    icon: <ShieldCheck className="h-8 w-8 text-[#00fdb9]" />,
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function IotPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground px-4 sm:px-6 py-6 flex flex-col">
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center gap-12 pb-16">
        <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-8 pt-8"
        >
          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-SpaceGroteskAnimation - 1751086389771">
              The Future of IoT Starts Here
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Building smart, secure, and scalable IoT infrastructure for homes,
              cities, and industries.
            </p>
          </div>

          {/* Lottie Animation */}
          <div className="w-full max-w-md">
            <Lottie
              animationData={iotAnimation}
              loop
              className="w-full h-full object-contain transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>
        </motion.section>

        {/* Grid Layout */}
        <div className="w-full">
          <Grid features={features} />
        </div>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 w-full"
        >
          <h2 className="text-3xl font-semibold">Connect. Control. Scale.</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From concept to deployment — we provide end-to-end IoT development
            and support tailored for your needs.
          </p>
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
            Let's Build Your IoT Stack
          </Button>
        </motion.section>
      </div>
    </main>
  );
}
