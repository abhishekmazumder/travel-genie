import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'TravelGenie',
  description:
    'GPTGenius: Your own intelligent travel companion. Powered by OpenAI, it enhances your conversations, help you discover new places and more!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
