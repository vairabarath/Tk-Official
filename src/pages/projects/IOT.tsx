import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import iotAnimation from "@/animations/iot.json";
import { SatelliteDish, Wifi, Router, Activity } from "lucide-react";
import { Grid } from "@/components/Grid";
import GridProduct from "@/components/ProductCard";

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
];

const projects = [
  {
    title: "SenseNet Grid",
    description:
      "A distributed sensor network that monitors environmental data like temperature, humidity, and air quality in real time, with cloud sync and local edge computing.",
    image: "/Projects/Iot/Iot1.png",
    href: "https://tamizhkalam.com",
    themeColor: "green",
  },
  {
    title: "SmartPulse Home",
    description:
      "A full-stack home automation system that connects lighting, security, and appliances via MQTT and voice assistants for seamless smart living.",
    image: "/Projects/Iot/Iot2.png",
    href: "https://tamizhkalam.com",
    themeColor: "green",
  },
  {
    title: "TrackFleet IQ",
    description:
      "An IoT-powered vehicle tracking and diagnostics platform with real-time GPS, predictive maintenance alerts, and driving behavior insights.",
    image: "/Projects/Iot/Iot3.png",
    href: "https://tamizhkalam.com",
    themeColor: "green",
  },
];

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
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
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

        {/* projects */}
        <section className="my-16">
          <h2 className="text-3xl md:text-4xl text-center mb-7 font-bold text-[#00fdb9]">
            Projects
          </h2>
          <GridProduct projects={projects as any} />
        </section>
      </div>
    </main>
  );
}
