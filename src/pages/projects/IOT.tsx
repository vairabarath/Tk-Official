import { useEffect, useState } from "react";

import { SatelliteDish, Wifi, Router, Activity } from "lucide-react";
import { Grid } from "@/components/Grid";
import GridProduct from "@/components/ProductCard";
import IotHero from "@/components/Iot/Hero";
import { iotProjects } from "@/data/projects-data";


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

export default function IotPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col items-center gap-12 pb-16">
        <IotHero />

        {/* Grid Layout */}
        <div className="w-full mt-10">
          <Grid features={features} />
        </div>

        {/* projects */}
        <section className="my-16">
          <h2 className="text-3xl md:text-4xl text-center mb-7 font-bold text-[#00fdb9]">
            Projects
          </h2>
          <GridProduct projects={iotProjects} />
        </section>
      </div>
    </main>
  );
}
