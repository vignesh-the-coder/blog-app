import { HeroUIProvider } from "@heroui/react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "ACME Dashboard",
  description: "ACME Company Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark text-foreground bg-background">
        <HeroUIProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
        </HeroUIProvider>
      </body>
    </html>
  );
}