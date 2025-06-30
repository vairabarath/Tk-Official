import HeroSection from "@/components/AI/Hero";
import { Grid } from "@/components/Grid";

import {
  Brain,
  Bot,
  Code2,
  Cpu,
  MessageSquareCode,
  Radar,
  ScanSearch,
  Sparkles,
} from "lucide-react";

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
  {
    title: "AI Chat Assistants",
    description:
      "Integrate intelligent conversational agents into apps, tools, or platforms.",
    icon: <Brain className="h-8 w-8 text-[#6366f1]" />,
  },
  {
    title: "Code Generation",
    description:
      "Accelerate development with AI-assisted code suggestions and refactoring.",
    icon: <Code2 className="h-8 w-8 text-[#6366f1]" />,
  },
  {
    title: "Predictive Analytics",
    description:
      "Anticipate trends, anomalies, and user behavior using real-time forecasting.",
    icon: <Radar className="h-8 w-8 text-[#6366f1]" />,
  },
  {
    title: "Creative Intelligence",
    description:
      "Leverage generative models to produce content, music, art, and design assets.",
    icon: <Sparkles className="h-8 w-8 text-[#6366f1]" />,
  },
];

export default function AiPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <section className="mb-20">
        <Grid features={aiFeatures} />
      </section>
    </main>
  );
}
