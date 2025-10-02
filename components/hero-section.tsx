"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "FIND CLOTHES THAT MATCHES YOUR STYLE",
    subtitle:
      "Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.",
    shopNow: "Shop Now",
  },
  so: {
    title: "HELO DHARKA KU HABBOON QAABKAAGA",
    subtitle:
      "Baadh dharka kala duwan ee si taxaddar leh loo sameeyay, oo loogu talagalay in la soo saaro shakhsiyaddaada gaar ah oo lagu adeego dhadhankaaga.",
    shopNow: "Hadda Iibso",
  },
}

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToCategory = () => {
    const categorySection = document.getElementById("browse-by-gender")
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative bg-muted px-4 py-16 md:py-24 pt-24 md:pt-32 min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/design-mode/Rectangle-2.png"
          alt="Couple wearing denim jackets"
          className="w-full h-full object-cover object-right"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent md:from-white/90 md:via-white/70"></div>
      </div>

      <div className="absolute top-24 right-8 md:right-16 text-3xl md:text-4xl z-10 animate-pulse text-black">★</div>
      <div className="absolute bottom-16 left-8 md:left-16 text-2xl md:text-3xl z-10 animate-pulse delay-300 text-black">
        ★
      </div>

      {/* Text Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight text-balance font-[family-name:var(--font-alfa-slab-one)]">
            {t.title}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">{t.subtitle}</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
            onClick={scrollToCategory}
          >
            {t.shopNow}
          </Button>
        </div>
      </div>
    </section>
  )
}
