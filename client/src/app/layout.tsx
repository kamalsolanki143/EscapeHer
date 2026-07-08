import type { Metadata, Viewport } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import QueryProvider from "@/components/providers/QueryProvider";

/* ─── Fonts ────────────────────────────────────────────────────────────────── */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "EscapeHer — AI-Assisted Women's Safety App",
    template: "%s | EscapeHer",
  },
  description:
    "EscapeHer keeps protecting you through a persistent emergency session until you are confirmed safe. One-tap SOS, live GPS, Heartbeat Protocol, and trusted contact alerts.",
  keywords: [
    "women safety",
    "emergency alert",
    "SOS app",
    "personal safety",
    "escape route",
    "trusted contacts",
    "heartbeat protocol",
  ],
  authors: [{ name: "EscapeHer Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "EscapeHer — AI-Assisted Women's Safety App",
    description:
      "Persistent emergency sessions, live GPS, Heartbeat Protocol, and smart safe routes.",
    siteName: "EscapeHer",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#159A8D",
};

/* ─── Root Layout ──────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          fontSans={`var(--font-inter, 'Inter', system-ui, sans-serif)`}
          fontMono={`var(--font-ibm-plex-mono, 'IBM Plex Mono', ui-monospace, monospace)`}
        >
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
