"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    men: "Men's Clothing",
    women: "Women's Clothing",
    kids: "Kids' Clothing",
    filters: "Filters",
    priceRange: "Price Range",
    category: "Category",
    size: "Size",
    color: "Color",
    rating: "Rating",
    applyFilters: "Apply Filters",
    clearFilters: "Clear Filters",
    showing: "Showing",
    of: "of",
    products: "products",
    categories: {
      tshirts: "T-Shirts",
      shirts: "Shirts",
      jeans: "Jeans",
      shorts: "Shorts",
      hoodies: "Hoodies",
      dresses: "Dresses",
      skirts: "Skirts",
      jackets: "Jackets",
      abaya: "Abaya",
      hijab: "Hijab",
    },
    sizes: {
      xs: "XS",
      s: "S",
      m: "M",
      l: "L",
      xl: "XL",
      xxl: "XXL",
    },
    colors: {
      black: "Black",
      white: "White",
      blue: "Blue",
      red: "Red",
      green: "Green",
      yellow: "Yellow",
    },
  },
  so: {
    men: "Dharka Ragga",
    women: "Dharka Dumarka",
    kids: "Dharka Caruurta",
    filters: "Shaandhada",
    priceRange: "Qiimaha",
    category: "Qaybta",
    size: "Cabbirka",
    color: "Midabka",
    rating: "Qiimaynta",
    applyFilters: "Isticmaal Shaandhada",
    clearFilters: "Nadiifi Shaandhada",
    showing: "Muujinaya",
    of: "ka mid ah",
    products: "alaabo",
    categories: {
      tshirts: "Shaadh",
      shirts: "Shaati",
      jeans: "Jeans",
      shorts: "Surwaal Gaaban",
      hoodies: "Hoodie",
      dresses: "Dhar Dumarka",
      skirts: "Guntiino",
      jackets: "Jaakad",
      abaya: "Abay",
      hijab: "Hijab",
    },
    sizes: {
      xs: "XS",
      s: "S",
      m: "M",
      l: "L",
      xl: "XL",
      xxl: "XXL",
    },
    colors: {
      black: "Madow",
      white: "Caddaan",
      blue: "Buluug",
      red: "Cas",
      green: "Cagaar",
      yellow: "Jaalle",
    },
  },
}

// Mock product data
const allProducts = {
  men: [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      nameTranslated: "Shaati leh Faahfaahin Tape",
      price: 6,
      rating: 4.5,
      image: "https://i.ibb.co.com/V5Cdd52/black-t-shirt-with-tape-details.jpg",
      category: "tshirts",
      size: ["s", "m", "l", "xl"],
      color: "black",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      nameTranslated: "Surwaal Caato ah",
      price: 7,
      originalPrice: 260,
      rating: 3.5,
      image: "https://i.ibb.co.com/j91P4drY/blue-skinny-jeans.png",
      category: "jeans",
      size: ["m", "l", "xl"],
      color: "blue",
    },
    {
      id: 3,
      name: "Vertical Striped Shirt",
      nameTranslated: "Shaati Xariiqo Taagan",
      price: 7.5,
      originalPrice: 232,
      rating: 5.0,
      image: "https://i.ibb.co.com/TBvKRqJ8/green-vertical-striped-shirt.jpg",
      category: "shirts",
      size: ["s", "m", "l"],
      color: "green",
    },
    {
      id: 4,
      name: "Courage Graphic T-shirt",
      nameTranslated: "Shaati Sawir Geesinnimo",
      price: 5,
      rating: 4.0,
      image: "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
      category: "tshirts",
      size: ["m", "l", "xl", "xxl"],
      color: "red",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      nameTranslated: "Shaati Checkered",
      price: 8,
      rating: 4.5,
      image: "https://i.ibb.co.com/GQTNnHbf/checkered-casual-shirt.jpg",
      category: "shirts",
      size: ["s", "m", "l", "xl"],
      color: "white",
    },
    {
      id: 6,
      name: "Bermuda Shorts",
      nameTranslated: "Surwaal Gaaban Bermuda",
      price: 5,
      rating: 3.0,
      image: "https://i.ibb.co.com/jkPYTq0r/beige-bermuda-shorts.jpg",
      category: "shorts",
      size: ["m", "l", "xl"],
      color: "blue",
    },
    {
      id: 7,
      name: "Faded Skinny Jeans",
      nameTranslated: "Surwaal Caato Dhalaalaya",
      price: 10,
      rating: 5.0,
      image: "https://i.ibb.co.com/yc8xz8mx/faded-blue-skinny-jeans.jpg",
      category: "jeans",
      size: ["m", "l", "xl"],
      color: "blue",
    },
  ],
  women: [
    {
      id: 10,
      name: "Abaya",
      nameTranslated: "Abay",
      price: 12,
      rating: 4.5,
      image: "https://i.ibb.co/qL8NJTZ0/abaya.jpg",
      category: "abaya",
      size: ["s", "m", "l", "xl"],
      color: "black",
    },
    {
      id: 11,
      name: "Hijab",
      nameTranslated: "Hijab",
      price: 8,
      rating: 4.5,
      image: "https://i.ibb.co/FbVKgMqq/hijab.jpg",
      category: "hijab",
      size: ["s", "m", "l"],
      color: "black",
    },
    {
      id: 12,
      name: "Women's Dress",
      nameTranslated: "Dhar Dumarka",
      price: 10,
      rating: 4.0,
      image: "https://i.ibb.co/353BdfNX/women-dress.jpg",
      category: "dresses",
      size: ["s", "m", "l"],
      color: "white",
    },
    {
      id: 13,
      name: "Women's Outfit",
      nameTranslated: "Dhar Dumarka",
      price: 15,
      rating: 5.0,
      image: "https://i.ibb.co/GvjFzNRC/women-outfit.jpg",
      category: "dresses",
      size: ["xs", "s", "m", "l"],
      color: "black",
    },
    {
      id: 14,
      name: "Women's Fashion",
      nameTranslated: "Dhar Dumarka",
      price: 11,
      rating: 4.5,
      image: "https://i.ibb.co/GvbYCfFs/women-fashion.jpg",
      category: "dresses",
      size: ["s", "m", "l", "xl"],
      color: "blue",
    },
    {
      id: 15,
      name: "Beige Sweater",
      nameTranslated: "Sweater Beige",
      price: 10,
      rating: 4.5,
      image: "https://i.ibb.co.com/rTRjprH/woman-wearing-beige-sweater-fashion.jpg",
      category: "hoodies",
      size: ["xs", "s", "m", "l"],
      color: "yellow",
    },
    {
      id: 16,
      name: "Casual Dress",
      nameTranslated: "Dhar Caadi ah",
      price: 5,
      rating: 4.0,
      image: "https://i.ibb.co.com/kstSPRsz/casual-woman.png",
      category: "dresses",
      size: ["s", "m", "l"],
      color: "white",
    },
    {
      id: 17,
      name: "Elegant Black Dress",
      nameTranslated: "Dhar Madow Qurux badan",
      price: 7,
      rating: 5.0,
      image: "https://i.ibb.co.com/4nvxRcSt/elegant-black-dress.png",
      category: "dresses",
      size: ["xs", "s", "m", "l"],
      color: "black",
    },
    {
      id: 18,
      name: "Denim Jacket",
      nameTranslated: "Jaakad Denim",
      price: 10,
      rating: 4.5,
      image: "https://i.ibb.co.com/LX8T9Pvm/women-denim-jacket.jpg",
      category: "jackets",
      size: ["s", "m", "l", "xl"],
      color: "blue",
    },
  ],
  kids: [
    {
      id: 19,
      name: "Kids Casual Set",
      nameTranslated: "Dhar Caruureed Caadi ah",
      price: 9,
      rating: 4.0,
      image: "https://i.ibb.co.com/trBbSrM/kids-wearing-casual-clothes-fashion.jpg",
      category: "tshirts",
      size: ["xs", "s", "m"],
      color: "white",
    },
    {
      id: 20,
      name: "Kids Hoodie",
      nameTranslated: "Hoodie Caruureed",
      price: 5,
      rating: 4.5,
      image: "https://i.ibb.co.com/6JcfkhH4/colorful-kids-hoodie.png",
      category: "hoodies",
      size: ["xs", "s", "m", "l"],
      color: "black",
    },
    {
      id: 21,
      name: "Kids Jeans",
      nameTranslated: "Jeans Caruureed",
      price: 6.5,
      rating: 4.0,
      image: "https://i.ibb.co.com/3yMwrN2L/kids-jeans.png",
      category: "jeans",
      size: ["xs", "s", "m"],
      color: "blue",
    },
    {
      id: 22,
      name: "Kids T-shirt Pack",
      nameTranslated: "Shaadh Caruureed",
      price: 8,
      rating: 4.5,
      image: "https://i.ibb.co.com/K8H9WhX/kids-colorful-t-shirts.jpg",
      category: "tshirts",
      size: ["xs", "s", "m"],
      color: "red",
    },
  ],
}

interface ProductListingProps {
  category: "men" | "women" | "kids"
}

export function ProductListing({ category }: ProductListingProps) {
  const { language } = useLanguage()
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)

  const t = translations[language]
  const products = allProducts[category]

  // Filter products
  const filteredProducts = products.filter((product) => {
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const sizeMatch = selectedSizes.length === 0 || product.size.some((s) => selectedSizes.includes(s))
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color)
    const ratingMatch = product.rating >= minRating

    return priceMatch && categoryMatch && sizeMatch && colorMatch && ratingMatch
  })

  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]))
  }

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]))
  }

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]))
  }

  const clearFilters = () => {
    setPriceRange([0, 300])
    setSelectedCategories([])
    setSelectedSizes([])
    setSelectedColors([])
    setMinRating(0)
  }

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">{t.priceRange}</h3>
        <Slider value={priceRange} onValueChange={setPriceRange} max={300} step={10} className="mb-2" />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Category */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">{t.category}</h3>
        <div className="space-y-2">
          {Object.entries(t.categories).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={key}
                checked={selectedCategories.includes(key)}
                onCheckedChange={() => handleCategoryToggle(key)}
              />
              <Label htmlFor={key} className="text-sm cursor-pointer">
                {value}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">{t.size}</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(t.sizes).map(([key, value]) => (
            <Button
              key={key}
              variant={selectedSizes.includes(key) ? "default" : "outline"}
              size="sm"
              onClick={() => handleSizeToggle(key)}
            >
              {value}
            </Button>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">{t.color}</h3>
        <div className="space-y-2">
          {Object.entries(t.colors).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${key}`}
                checked={selectedColors.includes(key)}
                onCheckedChange={() => handleColorToggle(key)}
              />
              <Label htmlFor={`color-${key}`} className="text-sm cursor-pointer">
                {value}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">{t.rating}</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={minRating === rating}
                onCheckedChange={() => setMinRating(minRating === rating ? 0 : rating)}
              />
              <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center gap-1">
                {rating}
                <Image src="/images/design-mode/star-icon.png" alt="star" width={16} height={16} className="h-4 w-4" />
                {language === "en" ? "& up" : "& kor"}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
        {t.clearFilters}
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {category === "men" ? t.men : category === "women" ? t.women : t.kids}
          </h1>

          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden bg-transparent">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                {t.filters}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetHeader>
                <SheetTitle>{t.filters}</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <Card className="border-border sticky top-4">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-foreground">{t.filters}</h2>
                  <Button variant="ghost" size="icon" onClick={clearFilters}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <FilterContent />
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <p className="text-muted-foreground mb-6">
              {t.showing} {filteredProducts.length} {t.of} {products.length} {t.products}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="border-border hover:shadow-lg transition-shadow cursor-pointer overflow-hidden rounded-xl"
                >
                  <CardContent className="p-0">
                    <Link href={`/product/${product.id}`}>
                      <div className="aspect-square overflow-hidden rounded-t-xl">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={language === "en" ? product.name : product.nameTranslated}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3 space-y-1.5">
                        <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-2">
                          {language === "en" ? product.name : product.nameTranslated}
                        </h3>
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
                          <span className="font-bold text-foreground">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {language === "en"
                    ? "No products found matching your filters."
                    : "Lama helin alaabo ku habboon shaandhadaada."}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
