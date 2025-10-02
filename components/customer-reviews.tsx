"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    title: "OUR HAPPY CUSTOMERS",
    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      },
      {
        name: "Alex K.",
        rating: 5,
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
      },
      {
        name: "James L.",
        rating: 4,
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have found Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      },
    ],
  },
  so: {
    title: "MACAAMIISHEENNA FARAXSAN",
    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        text: "Waxaan la yaabay tayada iyo qaabka dharka aan ka helay Shop.co. Dharka caadiga ah ilaa dharka quruxda badan, dhammaan waxa aan iibsaday ayaa ka sarreeya filashadayda.",
      },
      {
        name: "Alex K.",
        rating: 5,
        text: "Helitaanka dharka ku habboon qaabkayga gaarka ah waxay ahayd caqabad ilaa aan ogaaday Shop.co. Doorashooyinka ay bixiyaan waa kuwo runtii cajiib ah.",
      },
      {
        name: "James L.",
        rating: 4,
        text: "Anigoo had iyo jeer raadiya waxyaabo fashion ah oo gaar ah, waan ku faraxsanahay inaan helay Shop.co. Doorashada dharka ma aha oo kaliya mid kala duwan laakiin sidoo kale waa mid ku habboon isbeddellada ugu dambeeyay.",
      },
    ],
  },
}

export function CustomerReviews() {
  const { language } = useLanguage()
  const [currentReview, setCurrentReview] = useState(0)
  const t = translations[language]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % t.reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + t.reviews.length) % t.reviews.length)
  }

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.title}</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={prevReview}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextReview}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.reviews.map((review, index) => (
            <Card
              key={index}
              className={`border-border transition-all ${index === currentReview ? "ring-2 ring-primary" : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-foreground">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
