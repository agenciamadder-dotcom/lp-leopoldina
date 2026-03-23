import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { InlineEditor } from "@/components/dev/InlineEditor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Leopoldina Tintas | Tintas Industriais de Alta Performance",
  description: "Fábrica de tintas industriais no Rio de Janeiro. Elimine o risco operacional da sua obra com laudos técnicos e entrega expressa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body suppressHydrationWarning={true} className={`${inter.variable} ${playfair.variable} text-brand-dark min-h-screen flex flex-col font-sans relative`}>
        {/* Global Noise Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.05]">
          <svg className="absolute inset-0 h-full w-full">
            <filter id="noiseFilter">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <Header />
        <main className="flex-1 w-full bg-brand-light">
          {children}
        </main>
        <WhatsAppButton />
        {process.env.NODE_ENV === 'development' && <InlineEditor />}
        <Footer />
      </body>
    </html>
  );
}

