import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_Khmer } from "next/font/google";
import Header from "../components/Header";
import "../styles/main.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const notoKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  weight: ["400", "500"],
  variable: "--font-khmer",
});

export const metadata: Metadata = {
  title: "KOKSIN — Discover Cambodia's best local services",
  description:
    "Book trusted partners across Cambodia for beauty, wellness, fitness, home, pet, and auto services. See real availability and reserve in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${notoKhmer.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
