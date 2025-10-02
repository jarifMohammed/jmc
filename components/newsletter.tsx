"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "STAY UPTO DATE ABOUT OUR LATEST OFFERS",
    placeholder: "Enter your email address",
    subscribe: "Subscribe to Newsletter",
  },
  so: {
    title: "LA SOCOD BIXINTEENNA UGU DAMBEEYAY",
    placeholder: "Geli ciwaankaaga email-ka",
    subscribe: "Iska qor Warbaahinta",
  },
}

export function Newsletter() {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">{t.title}</h2>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder={t.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-primary-foreground text-primary border-0 flex-1"
          />
          <Button
            type="submit"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            {t.subscribe}
          </Button>
        </form>
      </div>
    </section>
  )
}
