"use client"

import { useLanguage } from "@/lib/language-context"
import { useEffect, useRef, useState } from "react"

const translations = {
  en: {
    brands: "International Brands",
    products: "High-Quality Products",
    customers: "Happy Customers",
  },
  so: {
    brands: "Calaamado Caalami ah",
    products: "Alaabo Tayo Sare leh",
    customers: "Macaamiil Faraxsan",
  },
}

function useCountAnimation(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const animate = () => {
            const now = Date.now()
            const progress = Math.min((now - startTime) / duration, 1)
            const easeOutQuad = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOutQuad * end))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          animate()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return { count, ref }
}

export function StatsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const brands = useCountAnimation(200)
  const products = useCountAnimation(30000)
  const customers = useCountAnimation(2000)

  return (
    <section className="bg-primary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div ref={brands.ref}>
            <div className="text-2xl md:text-4xl font-bold">{brands.count}+</div>
            <div className="text-sm md:text-base opacity-80">{t.brands}</div>
          </div>
          <div className="border-l border-r border-primary-foreground/20 px-4" ref={products.ref}>
            <div className="text-2xl md:text-4xl font-bold">{products.count.toLocaleString()}+</div>
            <div className="text-sm md:text-base opacity-80">{t.products}</div>
          </div>
          <div ref={customers.ref}>
            <div className="text-2xl md:text-4xl font-bold">{customers.count.toLocaleString()}+</div>
            <div className="text-sm md:text-base opacity-80">{t.customers}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
