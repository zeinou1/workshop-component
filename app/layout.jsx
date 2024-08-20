import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReactJourney",
  description: "Journey of you react learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className={clsx(inter.className, "h-full")}>{children}</body>
    </html>
  );
}
