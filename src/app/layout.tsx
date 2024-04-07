import Navbar from "@/components/Navbar";
import AppDataProvider from "@/redux/AppDataProvider";
import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhyve Assignment",
  description: "Redux-Toolkit Template using Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body
        className={inter.className}
        style={{ backgroundColor: "#DCD7C9", padding: "1rem" }}
        suppressHydrationWarning={true}
      >
        <ChakraProvider>
          <AppDataProvider>
            <Navbar />
          </AppDataProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
