import type { Metadata } from "next";
import { Playfair_Display, Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import clsx from "clsx";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_condensed = Roboto_Condensed({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto-condensed",
});
const playfairDisplay = Playfair_Display({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "PC Parts | %s",
    default: "PC parts",
  },
  description: "Prodaja i kupovina",
};

const pages: Record<string, `/${string}`> = {
  home: "/",
  login: "/login",
  profil: "/profil",
  market: "/market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(
        roboto.variable,
        roboto_condensed.variable,
        playfairDisplay.variable,
      )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
