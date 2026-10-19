import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getSiteUrl } from "@/lib/site";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "SARVOS",
    locale: "en_US",
    title: "SARVOS — Independent Software & Technology Studio",
    description:
      "Disciplined software engineering, high-reliability systems architecture, and technical consulting.",
  },
  twitter: {
    card: "summary",
    title: "SARVOS — Independent Software & Technology Studio",
    description:
      "Disciplined software engineering, high-reliability systems architecture, and technical consulting.",
  },
  title: {
    default: "SARVOS — Independent Software & Technology Studio",
    template: "%s | SARVOS",
  },
  description:
    "Disciplined software engineering, high-reliability systems architecture, and technical consulting.",
  keywords: [
    "software consultancy",
    "systems architecture",
    "Next.js",
    "high-throughput engineering",
    "API integration",
    "AI automation",
  ],
  authors: [{ name: "SARVOS Studio" }],
  creator: "SARVOS",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(regs) {
                    for (var r of regs) { r.unregister(); }
                  });
                }
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var name of names) { caches.delete(name); }
                  });
                }
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col justify-between font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="bg-foreground text-background focus-visible:ring-ring sr-only z-[60] rounded-full px-5 py-3 text-sm font-medium focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
