import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "StockHub",
  description: "Your one-stop guide to learn about finance!",
  icons: "/stockhub.png",
  openGraph: {
    title: "StockHub",
    description: "Your one-stop guide to learn about finance!",
    url: "https://stockhub.fun",
    siteName: "StockHub",
    images: [
      {
        url: "/og-stockhub.png",
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
    title: "StockHub",
    description: "Your one-stop guide to learn about finance!",
    images: ["/og-stockhub.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
