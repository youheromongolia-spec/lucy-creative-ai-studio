import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lucy Gray R — Creative AI Studio",
  description:
    "Монгол брэндийн сүнсийг гүнзгий ойлгож, AI-г зөвхөн хэрэгсэл болгон ашиглаж, органик, тансаг, үнэн мэдрэмжтэй визуал ертөнц бүтээдэг студи.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
