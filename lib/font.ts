import { Inconsolata } from "next/font/google";

const inconsolata_init = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-incosolata",
});

export const incosolata = inconsolata_init.className;
