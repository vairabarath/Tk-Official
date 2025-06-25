import {
  Facebook,
  LinkedinIcon,
  LucideFacebook,
  LucideTwitter,
} from "lucide-react";

export type SocialMedia = {
  name: string;
  icon: any;
  url: string;
};

export const socialMedia: SocialMedia[] = [
  {
    name: "facebook",
    icon: LucideFacebook,
    url: "#",
  },
  {
    name: "twitter",
    icon: LucideTwitter,
    url: "#",
  },
  {
    name: "linkedin",
    icon: LinkedinIcon,
    url: "#",
  },
];
