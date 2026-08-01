import type { IconType } from "react-icons";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

export type Profile = {
  name: string;
  handle: string;
  href: string;
  icon: IconType;
  /** Soft brand-adjacent tint for the icon tile. */
  tint: string;
};

/** Competitive-programming profiles, shared by the stack section and footer. */
export const CODING_PROFILES: Profile[] = [
  {
    name: "LeetCode",
    handle: "rogerdemello",
    href: "https://leetcode.com/u/rogerdemello/",
    icon: SiLeetcode,
    tint: "bg-[#FBF0E3] text-[#A5661A]",
  },
  {
    name: "CodeChef",
    handle: "droger289",
    href: "https://www.codechef.com/users/droger289/",
    icon: SiCodechef,
    tint: "bg-[#F2EDE8] text-[#5B4638]",
  },
  {
    name: "Codeforces",
    handle: "rogerdemello289",
    href: "https://codeforces.com/profile/rogerdemello289",
    icon: SiCodeforces,
    tint: "bg-[#E8F1F8] text-[#1F6F9E]",
  },
];
