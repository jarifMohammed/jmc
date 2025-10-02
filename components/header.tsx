"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

const translations = {
  en: {
    banner: "We are launching soon and for pre order please contact.",
    home: "HOME",
    men: "MEN",
    women: "WOMEN",
    kids: "KIDS",
  },
  so: {
    banner: "Waxaan bilaabayaa dhawaan oo dalabka hore fadlan la xiriir lambarka +1 (612) 626-7330",
    home: "GURIGA",
    men: "RAGGA",
    women: "DUMARKA",
    kids: "CARUURTA",
  },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
  const { language, setLanguage } = useLanguage()

  const t = translations[language]

  return (
    <>
      {showBanner && (
        <div className="bg-black text-white py-2 px-4 text-center text-sm relative">
          <p className="font-aboreto">{t.banner}</p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            {/* Mobile Menu Icon */}
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image
                src="/images/design-mode/logo.png"
                alt="JMC Market"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14"
              />
              <span className="font-alfa-slab-one text-lg md:text-xl text-foreground">JMC market shop</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 flex-1 justify-center font-aboreto">
              <Link href="/" className="text-sm hover:opacity-70 transition-opacity">
                {t.home}
              </Link>
              <Link href="/men" className="text-sm hover:opacity-70 transition-opacity">
                {t.men}
              </Link>
              <Link href="/women" className="text-sm hover:opacity-70 transition-opacity">
                {t.women}
              </Link>
              <Link href="/kids" className="text-sm hover:opacity-70 transition-opacity">
                {t.kids}
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "so" : "en")}
                className="flex items-center gap-1 font-aboreto"
              >
                {language.toUpperCase()}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border">
              <div className="pt-4 space-y-3">
                <nav className="flex flex-col gap-2 font-aboreto">
                  <Link
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 hover:bg-muted/50 rounded-lg"
                  >
                    {t.home}
                  </Link>
                  <Link
                    href="/men"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 hover:bg-muted/50 rounded-lg"
                  >
                    {t.men}
                  </Link>
                  <Link
                    href="/women"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 hover:bg-muted/50 rounded-lg"
                  >
                    {t.women}
                  </Link>
                  <Link
                    href="/kids"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-2 hover:bg-muted/50 rounded-lg"
                  >
                    {t.kids}
                  </Link>
                </nav>
                <div className="px-4 pt-2 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setLanguage(language === "en" ? "so" : "en")}
                    className="w-full flex items-center justify-center gap-1 font-aboreto"
                  >
                    {language.toUpperCase()}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
