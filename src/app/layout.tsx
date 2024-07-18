import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";
import { TChildrenProps } from "@/types";
import { Toaster } from "react-hot-toast";
import Providers from "@/providers/Providers";

const inter = Inconsolata({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Visit Mars",
  description: "Only few opportunity available!",
};

export default function RootLayout({ children }: TChildrenProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A192F]`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
// 0f172a
