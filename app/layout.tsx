import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoModal from "@/components/VideoModal";
import { incosolata } from "@/lib/font";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoniPost - Enhance Driving Safety",
  description:
    "An innovative way to create safer driving experiences through scientific analysis of postural data",
  metadataBase: new URL("https://monipost.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${incosolata} flex flex-col `}>
        <Header />
        <div className="z-10">
          <VideoModal />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
