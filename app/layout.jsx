import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "StockHub",
  description: "Your one-stop guide to learn about finance!",
  keywords:
    "finance, investing, stock market, learn stocks, StockHub, financial education, personal finance",
  author: "Fudail",
  icons: {
    icon: "/stockhub.png",
    shortcut: "/stockhub.png",
  },
  openGraph: {
    title: "StockHub",
    description: "Your one-stop guide to learn about finance!",
    url: "https://stockhub.fun",
    siteName: "StockHub",
    images: [
      {
        url: "https://stockhub.fun/og-stockhub.png",
        width: 1200,
        height: 630,
        alt: "StockHub Logo and Tagline",
      },
    ],
    siteName: "StockHub",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StockHub",
    description: "Your one-stop guide to learn about finance!",
    images: ["https://stockhub.fun/og-stockhub.png"],
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
