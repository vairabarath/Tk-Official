import BlockchainSection from "@/components/Home/Chains";
import FeatureSection from "@/components/Home/FeatureSection";
import { HeroSection } from "@/components/Home/Hero";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <section className="bg-background pb-16">
        <BlockchainSection />
      </section>
    </div>
  );
};

export default Home;
