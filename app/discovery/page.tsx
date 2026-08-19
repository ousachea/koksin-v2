import type { Metadata } from "next";
import HomeDiscovery from "../../components/HomeDiscovery";

export const metadata: Metadata = {
  title: "KOKSIN — Discover local services",
  description:
    "Discovery-first homepage layout: browse recommended, new, and trending partners across Cambodia.",
};

export default function DiscoveryPage() {
  return <HomeDiscovery />;
}
