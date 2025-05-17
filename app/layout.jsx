import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "StockHub | Your one-stop guide to learn about finance!",
  description:
    "People think that investing in stock markets is risky, deadly, and what not! But StockHub is here to teach you how to buy the castle you always wanted! Welcome to the MoneyLand!",
  icons: "/logo.png",
  keywords:
    "finance, investing, stock market, learn stocks, StockHub, financial education, personal finance",
  author: "Fudail",
  openGraph: {
    title: "StockHub | Your one-stop guide to learn about finance!",
    description: "People think that investing in stock markets is risky, deadly, and what not! But StockHub is here to teach you how to buy the castle you always wanted! Welcome to the MoneyLand!",
    url: "https://stockhub.fun",
    siteName: "StockHub",
    images: [
      {
        url: "https://stockhub.fun/banner.png",
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
    title: "StockHub | Your one-stop guide to learn about finance!",
    description: "People think that investing in stock markets is risky, deadly, and what not! But StockHub is here to teach you how to buy the castle you always wanted! Welcome to the MoneyLand!",
    images: ["https://stockhub.fun/banner.png"],
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
