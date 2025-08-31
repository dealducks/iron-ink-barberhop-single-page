import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { I18nProvider } from "@/components/I18nProvider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Iron & Ink Barbershop - Where Artistry Meets Tradition",
  description:
    "Premium barbershop experience in Bratislava. Master craftsmanship in men's haircuts, beard sculpting, and traditional shaves. Where every cut tells a story.",
  keywords: "premium barbershop, men's grooming, beard sculpting, traditional shave, Bratislava, luxury barbershop",
  openGraph: {
    title: "Iron & Ink Barbershop - Craft Your Legacy",
    description: "Experience the art of grooming at Bratislava's most prestigious barbershop",
    type: "website",
  },
  authors: [{ name: "PawLynx", url: "https://pawlynx.com" }],
  creator: "PawLynx",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
