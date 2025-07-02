import HeroSection from "@/components/AI/Hero";
import { Grid } from "@/components/Grid";
import GridProduct from "@/components/ProductCard";
import { Bot, Cpu, MessageSquareCode, ScanSearch } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const aiFeatures: Feature[] = [
  {
    title: "Intelligent Automation",
    description:
      "Automate workflows using AI agents that learn and adapt to dynamic tasks.",
    icon: <Bot className="h-8 w-8 text-[#6366f1]" />,
  },
  {
    title: "Natural Language Processing",
    description:
      "Understand and generate human language with models trained on massive datasets.",
    icon: <MessageSquareCode className="h-8 w-8 text-[#6366f1]" />,
  },
  {
    title: "Machine Learning Pipelines",
    description:
      "Train, tune, and deploy models at scale with reproducible ML workflows.",
    icon: <Cpu className="h-8 w-8 text-[#6366f1]" />,
  },
  {
    title: "Computer Vision",
    description:
      "Analyze images and videos in real-time for object detection, recognition, and tracking.",
    icon: <ScanSearch className="h-8 w-8 text-[#6366f1]" />,
  },
];

// Projects
const projects = [
  {
    title: "CodePilot AI",
    description:
      "An AI-powered coding assistant that autocompletes, explains, and debugs your code across multiple languages.",
    image: "/Projects/AI/AI1.png",
    href: "https://tamizhkalam.com",
    themeColor: "purple",
  },
  {
    title: "PixelMind Enhancer",
    description:
      "Uses GANs and diffusion models to upscale, restore, and enhance low-quality or damaged images in real-time.",
    image: "/Projects/AI/AI2.png",
    href: "https://tamizhkalam.com",
    themeColor: "purple",
  },
  {
    title: "EchoSynth",
    description:
      "A neural voice cloning system that can replicate any voice from just 10 seconds of audio.",
    image: "/Projects/AI/AI3.png",
    href: "https://tamizhkalam.com",
    themeColor: "purple",
  },
];

export default function AiPage() {
  return (
    <main className="min-h-screen flex flex-col overflow-x-hidden">
      <HeroSection />
      <section className="mt-16">
        <Grid features={aiFeatures} />
      </section>

      {/* projects */}
      <section className="my-16">
        <h2 className="text-3xl md:text-4xl text-center mb-7 font-bold text-[#6366f1]">
          Projects
        </h2>
        <GridProduct projects={projects as any} />
      </section>
    </main>
  );
}
