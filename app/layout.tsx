import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Abhaya_Libre, Alfa_Slab_One, Aboreto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { Suspense } from "react"

const abhayaLibre = Abhaya_Libre({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-abhaya-libre",
})

const alfaSlabOne = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alfa-slab-one",
})

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
})

export const metadata: Metadata = {
  title: "JMC Market Shop - Fashion E-commerce",
  description: "Find clothes that matches your style",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${abhayaLibre.variable} ${alfaSlabOne.variable} ${aboreto.variable}`}
      >
        <Suspense fallback={null}>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  )
}
