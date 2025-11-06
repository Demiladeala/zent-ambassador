import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const proximaNova = localFont({
  src: [
    {
      path: "./ProximaNovaA-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ProximaNovaA-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./ProximaNovaA-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./ProximaNovaA-Extrabld.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-proximaNova",
});

export const metadata: Metadata = {
  title: "Build Your Online Store in Minutes ",
  description: `Create your online store with Zent in minutes. Easy, fast, 
  and affordable e-commerce solutions. Start now! `,
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
      </head>
      <body
        suppressHydrationWarning
        className={`${proximaNova.className} 
       font-proximaNova bg-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
