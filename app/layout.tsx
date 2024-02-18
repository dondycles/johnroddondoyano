import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/shared/nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "John Rod Dondoyano",
  description: "Official Website of John Rod Dondoyano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased global-padding flex flex-col w-full h-[100dvh] gap-4 leading-8`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
