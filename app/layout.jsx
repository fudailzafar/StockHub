import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "StockHub - Simplifying Stock Market Learning",
  description: "Your one-stop guide to learn about finance! Learn about stocks, investing, and personal finance with StockHub.",
  icons: "/stockhub.png",
  keywords:
    "finance, investing, stock market, learn stocks, StockHub, financial education, personal finance",
  author: "Fudail",
  openGraph: {
    title: "StockHub - Simplifying Stock Market Learning",
    description: "Your one-stop guide to learn about finance!",
    url: "https://stockhub.fun",
    siteName: "StockHub",
    images: [
      {
        url: "https://stockhub.fun/og_image.png",
        width: 1200,
        height: 630,
        alt: "StockHub Logo and Tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StockHub - Simplifying Stock Market Learning",
    description: "Your one-stop guide to learn about finance!",
    images: ["https://stockhub.fun/og_image.png"],
  },
  alternates: {
    canonical: "https://stockhub.fun",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
