import type { Metadata } from "next";
import Listings from "../../../components/Listings";

export const metadata: Metadata = {
  title: "Listings — KOKSIN",
  description:
    "Browse bookable services across Cambodia with live prices, ratings, and real availability from verified partners.",
};

export default function ListingsPage() {
  return <Listings />;
}
