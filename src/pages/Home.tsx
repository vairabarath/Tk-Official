import BlockchainSection from "@/components/Home/Chains";
import FeatureSection from "@/components/Home/FeatureSection";
import { HeroSection } from "@/components/Home/Hero";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <BlockchainSection />
    </div>
  );
};

export default Home;
