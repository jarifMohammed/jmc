"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

interface ComingSoonModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ComingSoonModal({ open, onOpenChange }: ComingSoonModalProps) {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const translations = {
    en: {
      title: "Coming Soon!",
      description: "Our online store is launching soon. Contact us to pre-order this item.",
      name: "Your Name",
      email: "Your Email",
      phone: "Phone Number",
      message: "Message (Optional)",
      messagePlaceholder: "Tell us about your pre-order...",
      submit: "Submit Pre-order Request",
      close: "Close",
      successTitle: "Request Submitted!",
      successMessage: "Thank you for your interest. We'll contact you soon about your pre-order.",
    },
    so: {
      title: "Dhawaan ayay imanaysaa!",
      description: "Dukaamkeenna online-ka wuxuu bilaabmayaa dhawaan. Nala soo xiriir si aad u hortimaado alaabtan.",
      name: "Magacaaga",
      email: "Email-kaaga",
      phone: "Lambarka Telefoonka",
      message: "Fariin (Ikhtiyaari ah)",
      messagePlaceholder: "Noo sheeg wax ku saabsan hortimid...",
      submit: "Gudbi Codsiga Hortimid",
      close: "Xir",
      successTitle: "Codsiga waa la gudbiyay!",
      successMessage:
        "Waad ku mahadsan tahay xiisahaaga. Waxaan kula soo xiriiri doonaa dhawaan wax ku saabsan hortimid.",
    },
  }

  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Pre-order request:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setSubmitted(false)
      onOpenChange(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-foreground">{t.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">{t.description}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t.name}</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.name}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.email}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.email}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">{t.phone}</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t.phone}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  rows={3}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1 bg-transparent"
                >
                  {t.close}
                </Button>
                <Button type="submit" className="flex-1">
                  {t.submit}
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground mb-2">{t.successTitle}</DialogTitle>
            <DialogDescription className="text-muted-foreground">{t.successMessage}</DialogDescription>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
