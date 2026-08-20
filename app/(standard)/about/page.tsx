import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — KOKSIN",
};

export default function About() {
  return (
    <section className="page-shell">
      <p className="section-eyebrow">
        <span className="eyebrow-dash" />
        About
      </p>
      <h1 className="page-title">Cambodia&apos;s appointments marketplace.</h1>
      <p className="page-text">
        KOKSIN brings beauty, wellness, fitness, home, pet, and auto services together in one place
        — with real availability, verified partners, and confirmations by SMS or Telegram.
      </p>
      <Link className="page-link" href="/">
        Back to the homepage <span className="faq-link-arrow">→</span>
      </Link>
    </section>
  );
}
