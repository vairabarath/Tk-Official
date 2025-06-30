import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BlockchainSection from "@/components/Home/Chains";
import CustomSwiper from "@/components/ui/swiper";
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
  {
    title: "On-Chain Governance",
    description:
      "Enable decentralized voting mechanisms and community-led decision making.",
    icon: <ScrollText className="h-8 w-8 text-[#3b82f6]" />,
  },
  {
    title: "Tokenized Assets",
    description:
      "Represent real or digital assets as blockchain tokens to enable programmable value.",
    icon: <BadgeDollarSign className="h-8 w-8 text-[#3b82f6]" />,
  },
  {
    title: "Interoperability",
    description:
      "Facilitate cross-chain communication and asset transfers between blockchain networks.",
    icon: <Link2 className="h-8 w-8 text-[#3b82f6]" />,
  },
  {
    title: "Regulatory Compliance",
    description:
      "Implement KYC/AML and audit trails without compromising decentralization.",
    icon: <Landmark className="h-8 w-8 text-[#3b82f6]" />,
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

      {/* chains list */}
      <section className="mt-16">
        <BlockchainSection />
      </section>
    </main>
  );
};

export default BlockchainPage;
