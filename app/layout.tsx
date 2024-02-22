import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/shared/nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "John Rod Dondoyano",
  description:
    "A growing pianist on YouTube and an aspiring professional in the field of web development, driven by a dual passion for music and web development, harboring ambitions for a distinguished career trajectory in both domains.",
  metadataBase: new URL("https://johnroddondoyano.com/"),
  themeColor: "#0a0a0a",
  twitter: {
    title: "John Rod Dondoyano",
    description:
      "A growing pianist on YouTube and an aspiring professional in the field of web development, driven by a dual passion for music and web development, harboring ambitions for a distinguished career trajectory in both domains.",
    card: "summary_large_image",
    creator: "@dondycles",
    images: {
      url: "/summary.png",
      alt: "John Rod Dondoyano",
    },
  },
  openGraph: {
    title: "John Rod Dondoyano",
    description:
      "A growing pianist on YouTube and an aspiring professional in the field of web development, driven by a dual passion for music and web development, harboring ambitions for a distinguished career trajectory in both domains.",
    type: "website",
    siteName: "John Rod Dondoyano",
    url: "https://johnroddondoyano.com/",
    images: [
      {
        url: "/summary.png",
        width: 800,
        height: 800,
      },
      {
        url: "/summary.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased overflow-hidden sm:text-base text-sm `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-h-[100dvh] h-screen w-full flex flex-col overflow-auto leading-7">
            <Nav />
            {children}
            <SpeedInsights />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
