import BlockchainSection from "@/components/Home/Chains";
import BlockchainHero from "@/components/Blockchain/Hero";

import {
  DatabaseZap,
  Network,
  Lock,
  ShieldCheck,
  ScrollText,
  Landmark,
  BadgeDollarSign,
  Link2,
} from "lucide-react";
import { Grid } from "@/components/Grid";
import GridProduct from "@/components/ProductCard";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const blockchainFeatures: Feature[] = [
  {
    title: "Immutable Ledger",
    description:
      "Permanently record every transaction in a tamper-proof ledger for auditability and trust.",
    icon: <DatabaseZap className="h-8 w-8 text-[#3b82f6]" />, // blue-500
  },
  {
    title: "Decentralized Network",
    description:
      "Distribute control across nodes, removing single points of failure and central authority.",
    icon: <Network className="h-8 w-8 text-[#3b82f6]" />,
  },
  {
    title: "Cryptographic Security",
    description:
      "Use advanced cryptography to secure transactions and validate ownership.",
    icon: <Lock className="h-8 w-8 text-[#3b82f6]" />,
  },
  {
    title: "Smart Contracts",
    description:
      "Run self-executing code directly on the blockchain for automation and trustless logic.",
    icon: <ShieldCheck className="h-8 w-8 text-[#3b82f6]" />,
  },
];

const projects = [
  {
    title: "ChainFund Vault",
    description:
      "A decentralized crowdfunding platform powered by smart contracts, ensuring secure and transparent funding rounds without intermediaries.",
    image: "/Projects/BlockChain/Blockchain1.png",
    href: "https://tamizhkalam.com",
    themeColor: "blue",
  },
  {
    title: "MetaLedger ID",
    description:
      "Blockchain-based digital identity system offering secure, verifiable credentials across Web3 platforms — no central authority required.",
    image: "/Projects/BlockChain/BlockChain2.png",
    href: "https://tamizhkalam.com",
    themeColor: "blue",
  },
  {
    title: "BitTrace Explorer",
    description:
      "A real-time blockchain analytics dashboard that visualizes transactions, detects anomalies, and helps trace wallet activity across chains.",
    image: "/Projects/BlockChain/BlockChain3.png",
    href: "https://tamizhkalam.com",
    themeColor: "blue",
  },
];

const BlockchainPage = () => {
  return (
    <main className="bg-background text-foreground min-h-screen py-16 px-4">
      <BlockchainHero />

      {/* Features Section */}
      <section className="mt-16">
        <Grid features={blockchainFeatures} />
      </section>

      {/* projects */}
      <section className="my-16">
        <h2 className="text-3xl md:text-4xl text-center mb-5 font-bold text-[#3b82f6]">
          Projects
        </h2>
        <GridProduct projects={projects as any} />
      </section>
      {/* chains list */}
      <section className="mt-16">
        <BlockchainSection />
      </section>
    </main>
  );
};

export default BlockchainPage;
