import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { incosolata } from "@/lib/font";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${incosolata} flex flex-col `}>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
