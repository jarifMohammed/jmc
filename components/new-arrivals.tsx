"use client"
import Link from "next/link"
import type React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { useRef, useState } from "react"

const translations = {
  en: {
    title: "NEW ARRIVALS",
    products: [
      {
        name: "T-shirt with Tape Details",
        price: "$6",
        originalPrice: null,
        rating: 4.5,
        image: "https://i.ibb.co.com/V5Cdd52/black-t-shirt-with-tape-details.jpg",
      },
      {
        name: "Skinny Fit Jeans",
        price: "$10",
        originalPrice: "$18",
        rating: 3.5,
        image: "https://i.ibb.co.com/j91P4drY/blue-skinny-jeans.png",
      },
      {
        name: "Checkered Shirt",
        price: "$8",
        originalPrice: null,
        rating: 4.5,
        image: "https://i.ibb.co.com/GQTNnHbf/checkered-casual-shirt.jpg",
      },
      {
        name: "Sleeve Striped T-shirt",
        price: "$7",
        originalPrice: "$16",
        rating: 4.5,
        image: "https://i.ibb.co.com/dJ7LVKX5/striped-sleeve-t-shirt.jpg",
      },
      {
        name: "Vertical Striped Shirt",
        price: "$7.5",
        originalPrice: "$16",
        rating: 5.0,
        image: "https://i.ibb.co.com/TBvKRqJ8/green-vertical-striped-shirt.jpg",
      },
      {
        name: "Courage Graphic T-shirt",
        price: "$5",
        originalPrice: null,
        rating: 4.0,
        image: "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
      },
      {
        name: "Loose Fit Bermuda Shorts",
        price: "$5",
        originalPrice: null,
        rating: 3.0,
        image: "https://i.ibb.co.com/jkPYTq0r/beige-bermuda-shorts.jpg",
      },
      {
        name: "Faded Skinny Jeans",
        price: "$10",
        originalPrice: null,
        rating: 4.5,
        image: "https://i.ibb.co.com/yc8xz8mx/faded-blue-skinny-jeans.jpg",
      },
      {
        name: "Polo with Contrast Trims",
        price: "$10",
        originalPrice: "$242",
        rating: 4.0,
        image: "https://i.ibb.co.com/B22cbCHW/pink-polo-shirt-with-contrast.jpg",
      },
      {
        name: "Gradient Graphic T-shirt",
        price: "$9",
        originalPrice: null,
        rating: 3.5,
        image: "https://i.ibb.co.com/wFjR6LwT/gradient-graphic-t-shirt.jpg",
      },
    ],
  },
 so: {
  title: "WAXYAABO CUSUB",
  products: [
    {
      name: "Shaati leh Faahfaahin Tape",
      price: "$6",
      originalPrice: null,
      rating: 4.5,
      image: "https://i.ibb.co/V5Cdd52/black-t-shirt-with-tape-details.jpg",
    },
    {
      name: "Surwaal Caato ah",
      price: "$10",
      originalPrice: "$18",
      rating: 3.5,
      image: "https://i.ibb.co/j91P4drY/blue-skinny-jeans.png",
    },
    {
      name: "Shaati Checkered",
      price: "$8",
      originalPrice: null,
      rating: 4.5,
      image: "https://i.ibb.co/GQTNnHbf/checkered-casual-shirt.jpg",
    },
    {
      name: "Shaati Xariiqo Gacanta",
      price: "$7",
      originalPrice: "$16",
      rating: 4.5,
      image: "https://i.ibb.co/dJ7LVKX5/striped-sleeve-t-shirt.jpg",
    },
    {
      name: "Shaati Xariiqo Taagan",
      price: "$7.5",
      originalPrice: "$16",
      rating: 5.0,
      image: "https://i.ibb.co/TBvKRqJ8/green-vertical-striped-shirt.jpg",
    },
    {
      name: "Shaati Sawir Geesinnimo",
      price: "$5",
      originalPrice: null,
      rating: 4.0,
      image: "https://i.ibb.co/23ykXt8Q/orange-graphic-tee.png",
    },
    {
      name: "Surwaal Gaaban Bermuda",
      price: "$5",
      originalPrice: null,
      rating: 3.0,
      image: "https://i.ibb.co/jkPYTq0r/beige-bermuda-shorts.jpg",
    },
    {
      name: "Surwaal Caato Faded",
      price: "$10",
      originalPrice: null,
      rating: 4.5,
      image: "https://i.ibb.co/yc8xz8mx/faded-blue-skinny-jeans.jpg",
    },
    {
      name: "Polo leh Contrast",
      price: "$10",
      originalPrice: "$242",
      rating: 4.0,
      image: "https://i.ibb.co/B22cbCHW/pink-polo-shirt-with-contrast.jpg",
    },
    {
      name: "Shaati Gradient",
      price: "$9",
      originalPrice: null,
      rating: 3.5,
      image: "https://i.ibb.co/wFjR6LwT/gradient-graphic-t-shirt.jpg",
    },
  ],
},
}

export function NewArrivals() {
  const { language } = useLanguage()
  const t = translations[language]
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk
    }
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t.title}</h2>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {t.products.map((product, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-shadow flex-shrink-0 w-[280px] overflow-hidden rounded-xl"
            >
              <CardContent className="p-0">
                <Link href={`/product/${index + 1}`} className="pointer-events-auto">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                      draggable="false"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-foreground text-base line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src="/images/design-mode/star-icon.png"
                          alt="star"
                          width={16}
                          height={16}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "opacity-100"
                              : i < product.rating
                                ? "opacity-50"
                                : "opacity-20"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground text-lg">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
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
