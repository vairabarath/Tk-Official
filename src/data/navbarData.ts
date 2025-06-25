import type { LucideIcon } from "lucide-react";
import { Cpu, Blocks, RouterIcon } from "lucide-react";

export interface Project {
  name: string;
  description: string;
  path: string;
  icon?: LucideIcon;
}

export interface MegaMenuDomain {
  name: string;
  icon: LucideIcon;
  description: string;
  path: string;
}

export interface NavItem {
  name: string;
  path?: string;
  megaMenu?: MegaMenuDomain[];
}

export const navbarData: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Products",
    path: "/products",
    megaMenu: [
      {
        name: "Blockchain Solutions",
        icon: Blocks,
        description:
          "Pioneering decentralized applications and secure ledger technologies.",
        path: "/products/blockchain",
      },
      {
        name: "AI Innovations",
        icon: Cpu,
        description:
          "Harnessing artificial intelligence to drive business growth and efficiency.",
        path: "/products/ai",
      },
      {
        name: "IoT Systems",
        icon: RouterIcon,
        description:
          "Connecting the physical and digital worlds with smart IoT solutions.",
        path: "/products/iot",
      },
    ],
  },
  { name: "Contact Us", path: "/contact" },
];
