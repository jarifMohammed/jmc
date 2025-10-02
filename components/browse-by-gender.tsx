"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"

const translations = {
  en: {
    title: "BROWSE BY GENDER",
    categories: [
      {
        name: "MEN",
        subtitle: "",
        href: "/men",
        image: "https://i.ibb.co.com/yBy5n1nV/man-casual-white-tshirt.jpg",
      },
      {
        name: "Formal",
        subtitle: "",
        href: "/men",
        image: "https://i.ibb.co.com/xqZXVdG0/man-formal-suit.jpg",
      },
      {
        name: "WOMEN",
        subtitle: "",
        href: "/women",
        image: "https://i.ibb.co.com/rTRjprH/woman-wearing-beige-sweater-fashion.jpg",
      },
      {
        name: "KIDS",
        subtitle: "",
        href: "/kids",
        image: "https://i.ibb.co.com/5XPx7MMZ/kids-group-casual.jpg",
      },
    ],
  },
  so: {
    title: "RAADI JINSI AHAAN",
    categories: [
      {
        name: "RAGGA",
        subtitle: "",
        href: "/men",
        image: "https://i.ibb.co.com/yBy5n1nV/man-casual-white-tshirt.jpg",
      },
      {
        name: "Rasmi",
        subtitle: "",
        href: "/men",
        image: "https://i.ibb.co.com/xqZXVdG0/man-formal-suit.jpg",
      },
      {
        name: "DUMARKA",
        subtitle: "",
        href: "/women",
        image: "https://i.ibb.co.com/rTRjprH/woman-wearing-beige-sweater-fashion.jpg",
      },
      {
        name: "CARUURTA",
        subtitle: "",
        href: "/kids",
        image: "https://i.ibb.co.com/5XPx7MMZ/kids-group-casual.jpg",
      },
    ],
  },
}

export function BrowseByGender() {
  const { language } = useLanguage()
  const t = translations[language]

  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate cards one by one with delay
          t.categories.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 150)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [t.categories])

  return (
    <section id="browse-by-gender" ref={sectionRef} className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-alfa-slab-one text-foreground text-center mb-12 tracking-tight">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {t.categories.map((category, index) => (
            <Card
              key={index}
              className={`border-0 hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden rounded-3xl group ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <Link href={category.href}>
                  <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center p-8 md:p-12">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-abhaya-libre font-extrabold text-black tracking-tight">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
