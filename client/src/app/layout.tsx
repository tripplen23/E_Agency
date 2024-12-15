import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
//import Sidebar from "@/components/Sidebar";
//import { Header } from "@/components/Header";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "EAgency",
  description: "Your one-stop solution for AI services",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen overflow-hidden">
            {/* <Sidebar /> */}
            <div className="flex-1 flex flex-col">
              {/* <Header /> */}
              <main className="flex-1 overflow-y-auto bg-background">
                {children}
                <Toaster richColors />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
