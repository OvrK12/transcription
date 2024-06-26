import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AudioScribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const additionalBodyClasses = 'flex flex-col min-h-screen';
  return (
    <html lang="en">
      <body className={`${inter.className} ${additionalBodyClasses}`}>
      <script src="https://kit.fontawesome.com/3cb8c7f243.js" crossOrigin="anonymous"></script>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
