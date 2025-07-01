import { motion } from "framer-motion";

const blockchains = [
  { name: "Bitcoin", logo: "/Logos/BitcoinLogo.png" },
  { name: "Ethereum", logo: "/Logos/ethereumLogo.png" },
  { name: "Polygon", logo: "/Logos/PolygonLogo.png" },
  { name: "Avalanche", logo: "/Logos/Avalanche.png" },
  { name: "BNB Chain", logo: "/Logos/BNBLogo.png" },
  { name: "Solana", logo: "/Logos/SolanaLogo.png" },
  { name: "Cosmos", logo: "/Logos/CosmosLogo.png" },
  { name: "Polkadot", logo: "/Logos/PolkadotLogo.png" },
  { name: "Hyperledger", logo: "/Logos/HyperledgerLogo.png" },
  { name: "Corda", logo: "/Logos/CordaLogo.png" },
  { name: "Tezos", logo: "/Logos/TezosLogo.png" },
  { name: "Cardano", logo: "/Logos/CardanoLogo.png" },
  { name: "Tron", logo: "/Logos/TronLogo.png" },
  { name: "Litecoin", logo: "/Logos/LitecoinLogo.png" },
];

// Duplicate logos for seamless looping
const duplicatedBlockchains = [...blockchains, ...blockchains];

const BlockchainSection = () => {
  return (
    <div className="pt-12 bg-background transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 mx-2 md:mb-8 text-gray-900 dark:text-gray-100">
          Leading Industry Chains We Have Experience With
        </h2>

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
          {/* Left Gradient Overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white dark:from-background to-transparent z-10" />

          {/* Right Gradient Overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white dark:from-background to-transparent z-10" />

          <motion.div
            className="flex flex-nowrap space-x-6 md:space-x-12"
            initial={{ x: "0%" }}
            animate={{ x: "-400%" }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {duplicatedBlockchains.map((chain, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[100px] sm:min-w-[120px] md:min-w-[200px] px-2 md:px-4"
              >
                <img
                  src={chain.logo}
                  alt={chain.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
                />
                <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100 font-medium">
                  {chain.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
