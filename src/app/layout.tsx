import type { Metadata } from "next";
import { DM_Sans, Roboto } from "next/font/google";
import "./globals.css";
import DeveloperSignature from "@/components/DeveloperSignature";
import Loading from "@/components/Loading";
import BackgroundParticles from "@/components/BackgroundParticles";
import SchemaMarkup from "@/components/SchemaMarkup";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true,
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://demir6.com'),
  title: "Demir6",
  description: "Demir & Çelik sektöründe hizmet veren Demir6 modülü kullanıcıların Web platformu. 2014'ten beri güvenilir çözüm ortağınız.",
  keywords: "demir6, demir, çelik, demir tüccarı, demir programı, çelik programı",
  authors: [{ name: "Demir6" }],
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/images/11.png" },
    ],
    shortcut: "/images/11.png",
    apple: "/images/11.png",
  },
  openGraph: {
    title: "Demir6",
    description: "Demir & Çelik sektöründe hizmet veren Demir6 modülü kullanıcıların Web platformu. 2014'ten beri güvenilir çözüm ortağınız.",
    type: "website",
    siteName: "Demir6",
    url: "https://demir6.com",
    locale: "tr_TR",
    images: [
      {
        url: "/images/11.png",
        width: 1200,
        height: 630,
        alt: "Demir6 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demir6",
    description: "Demir & Çelik sektöründe hizmet veren Demir6 modülü kullanıcıların Web platformu.",
    images: ["/images/11.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console doğrulama kodu buraya eklenebilir
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      {/*
        ╔═══════════════════════════════════════════════════════════╗
        ║                                                           ║
        ║  ██████╗ ███████╗███╗   ███╗██╗██████╗  ██████╗          ║
        ║  ██╔══██╗██╔════╝████╗ ████║██║██╔══██╗██╔════╝          ║
        ║  ██║  ██║█████╗  ██╔████╔██║██║██████╔╝███████╗          ║
        ║  ██║  ██║██╔══╝  ██║╚██╔╝██║██║██╔══██╗██╔═══██╗         ║
        ║  ██████╔╝███████╗██║ ╚═╝ ██║██║██║  ██║╚██████╔╝         ║
        ║  ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝          ║
        ║                                                           ║
        ║  Developed by: Atakan Oral                                ║
        ║  Company: Mentalsoft                                      ║
        ║  Year: 2026                                               ║
        ║  Project: Demir6 - Steel & Iron Management System         ║
        ║                                                           ║
        ╚═══════════════════════════════════════════════════════════╝
      */}
      <body
        className={`${dmSans.variable} ${roboto.variable} antialiased font-roboto`}
        suppressHydrationWarning
      >
        <BackgroundParticles />
        <Loading />
        <DeveloperSignature />
        {children}
      </body>
    </html>
  );
}
