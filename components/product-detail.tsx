"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, Minus, Plus, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ComingSoonModal } from "@/components/coming-soon-modal"
import { useLanguage } from "@/lib/language-context"

const translations = {
  en: {
    home: "Home",
    men: "Men",
    women: "Women",
    kids: "Kids",
    backToProducts: "Back to Products",
    selectSize: "Select Size",
    quantity: "Quantity",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    productDetails: "Product Details",
    reviews: "Reviews",
    description: "Description",
    material: "Material",
    careInstructions: "Care Instructions",
    writeReview: "Write a Review",
    allReviews: "All Reviews",
    verified: "Verified Purchase",
  },
  so: {
    home: "Guriga",
    men: "Ragga",
    women: "Dumarka",
    kids: "Caruurta",
    backToProducts: "Ku noqo Alaabta",
    selectSize: "Dooro Cabbirka",
    quantity: "Tirada",
    addToCart: "Ku dar Shantada",
    buyNow: "Hadda Iibso",
    productDetails: "Faahfaahinta Alaabta",
    reviews: "Dib u eegista",
    description: "Sharaxaad",
    material: "Walxaha",
    careInstructions: "Tilmaamaha Daryeelka",
    writeReview: "Qor Dib u eegis",
    allReviews: "Dhammaan Dib u eegista",
    verified: "Iibsi la Xaqiijiyay",
  },
}

const productsData = [
  {
    id: "1",
    name: "T-shirt with Tape Details",
    nameTranslated: "Shaati leh Faahfaahin Tape",
    category: "men",
    price: 6,
    rating: 4.5,
    reviewCount: 128,
    image: "https://i.ibb.co.com/V5Cdd52/black-t-shirt-with-tape-details.jpg",
    images: [
      "https://i.ibb.co.com/V5Cdd52/black-t-shirt-with-tape-details.jpg",
      "https://i.ibb.co.com/V5Cdd52/black-t-shirt-with-tape-details.jpg",
      "https://i.ibb.co.com/V5Cdd52/black-t-shirt-with-tape-details.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "This t-shirt is perfect for any occasion. Comfortable, stylish, and made with premium materials. Features unique tape details that add a modern touch to a classic design.",
    descriptionTranslated:
      "Shaatigan wuxuu ku habboon yahay xaalad kasta. Raaxo, qaab qurux badan, oo lagu sameeyay walxo tayo sare leh. Waxay leedahay faahfaahin tape gaar ah oo ku dara taabo casri ah qaab dhaqameed.",
    material: "100% Premium Cotton",
    materialTranslated: "100% Suuf Tayo Sare",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Samantha D.",
        rating: 5,
        date: "August 14, 2023",
        text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        verified: true,
      },
      {
        name: "Alex M.",
        rating: 4,
        date: "August 15, 2023",
        text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        verified: true,
      },
      {
        name: "Ethan R.",
        rating: 5,
        date: "August 16, 2023",
        text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        verified: true,
      },
      {
        name: "Olivia P.",
        rating: 4,
        date: "August 17, 2023",
        text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        verified: false,
      },
    ],
  },
  {
    id: "2",
    name: "Skinny Fit Jeans",
    nameTranslated: "Surwaal Caato ah",
    category: "men",
    price: 7,
    originalPrice: 260,
    rating: 3.5,
    reviewCount: 89,
    image: "https://i.ibb.co.com/j91P4drY/blue-skinny-jeans.png",
    images: [
      "https://i.ibb.co.com/j91P4drY/blue-skinny-jeans.png",
      "https://i.ibb.co.com/j91P4drY/blue-skinny-jeans.png",
      "https://i.ibb.co.com/j91P4drY/blue-skinny-jeans.png",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "These skinny fit jeans are designed to provide a sleek and modern look. Made with stretch denim for maximum comfort and flexibility.",
    descriptionTranslated:
      "Surwaalkan caato ah waxaa loogu talagalay inay bixiyaan muuqaal casri ah oo qurux badan. Waxaa lagu sameeyay denim kala baxsan si loo helo raaxo iyo dabacsanaan ugu badan.",
    material: "98% Cotton, 2% Elastane",
    materialTranslated: "98% Suuf, 2% Elastane",
    care: "Machine wash cold, hang dry",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji",
    reviews: [
      {
        name: "Michael B.",
        rating: 4,
        date: "July 20, 2023",
        text: "Great fit and comfortable. The stretch material makes them perfect for everyday wear.",
        verified: true,
      },
      {
        name: "Jessica L.",
        rating: 3,
        date: "July 22, 2023",
        text: "Good jeans but the color faded a bit after a few washes. Still comfortable though.",
        verified: true,
      },
    ],
  },
  {
    id: "3",
    name: "Vertical Striped Shirt",
    nameTranslated: "Shaati Xariiqo Taagan",
    category: "men",
    price: 7.5,
    originalPrice: 232,
    rating: 5.0,
    reviewCount: 156,
    image: "https://i.ibb.co.com/TBvKRqJ8/green-vertical-striped-shirt.jpg",
    images: [
      "https://i.ibb.co.com/TBvKRqJ8/green-vertical-striped-shirt.jpg",
      "https://i.ibb.co.com/TBvKRqJ8/green-vertical-striped-shirt.jpg",
      "https://i.ibb.co.com/TBvKRqJ8/green-vertical-striped-shirt.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A classic vertical striped shirt that brings sophistication to any outfit. Perfect for both casual and formal occasions with its timeless design.",
    descriptionTranslated:
      "Shaati xariiqo taagan oo qadiimi ah oo u keena qurux iyo sharaf dhar kasta. Ku habboon labada xaalad ee caadiga ah iyo kuwa rasmiga ah oo leh qaab weligiis jira.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Machine wash warm, iron if needed",
    careTranslated: "Mashiinka ku dhaq kulul, bir haddii loo baahdo",
    reviews: [
      {
        name: "David K.",
        rating: 5,
        date: "September 5, 2023",
        text: "Excellent quality shirt! The stripes are perfectly aligned and the fabric is breathable. I've received many compliments wearing this.",
        verified: true,
      },
      {
        name: "Sarah T.",
        rating: 5,
        date: "September 8, 2023",
        text: "My husband loves this shirt. It fits perfectly and looks great with jeans or dress pants.",
        verified: true,
      },
    ],
  },
  {
    id: "4",
    name: "Courage Graphic T-shirt",
    nameTranslated: "Shaati Sawir Geesinnimo",
    category: "men",
    price: 5,
    rating: 4.0,
    reviewCount: 92,
    image: "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
    images: [
      "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
      "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
      "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
    ],
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Express yourself with this bold graphic t-shirt. Features an inspiring courage design that makes a statement wherever you go.",
    descriptionTranslated:
      "Isku muuji shaati sawir ah oo dhiirran. Waxay leedahay qaab geesinnimo dhiirrigelin ah oo ka dhiga hadal meel kasta oo aad tagto.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Machine wash cold, do not bleach",
    careTranslated: "Mashiinka ku dhaq qabow, ha caddayn",
    reviews: [
      {
        name: "Marcus J.",
        rating: 4,
        date: "August 25, 2023",
        text: "Love the design and message. The shirt is comfortable and the print quality is good.",
        verified: true,
      },
      {
        name: "Emily R.",
        rating: 4,
        date: "August 28, 2023",
        text: "Great motivational shirt! The fit is true to size and the fabric is soft.",
        verified: false,
      },
    ],
  },
  {
    id: "5",
    name: "Checkered Shirt",
    nameTranslated: "Shaati Checkered",
    category: "men",
    price: 8,
    originalPrice: 232,
    rating: 4.5,
    reviewCount: 134,
    image: "https://i.ibb.co.com/GQTNnHbf/checkered-casual-shirt.jpg",
    images: [
      "https://i.ibb.co.com/GQTNnHbf/checkered-casual-shirt.jpg",
      "https://i.ibb.co.com/GQTNnHbf/checkered-casual-shirt.jpg",
      "https://i.ibb.co.com/GQTNnHbf/checkered-casual-shirt.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A versatile checkered shirt that pairs well with any casual outfit. Classic pattern with modern fit for the contemporary man.",
    descriptionTranslated:
      "Shaati checkered oo kala duwan oo si fiican ula shaqeeya dhar caadi ah. Qaab qadiimi ah oo leh qaab casri ah ninka casriga ah.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Robert P.",
        rating: 5,
        date: "July 15, 2023",
        text: "Perfect casual shirt. The checkered pattern is classic and the fit is excellent.",
        verified: true,
      },
      {
        name: "Linda M.",
        rating: 4,
        date: "July 18, 2023",
        text: "Bought this for my son and he loves it. Good quality and looks great.",
        verified: true,
      },
    ],
  },
  {
    id: "6",
    name: "Loose Fit Bermuda Shorts",
    nameTranslated: "Surwaal Gaaban Bermuda",
    category: "men",
    price: 5,
    rating: 3.0,
    reviewCount: 67,
    image: "https://i.ibb.co.com/jkPYTq0r/beige-bermuda-shorts.jpg",
    images: [
      "https://i.ibb.co.com/jkPYTq0r/beige-bermuda-shorts.jpg",
      "https://i.ibb.co.com/jkPYTq0r/beige-bermuda-shorts.jpg",
      "https://i.ibb.co.com/jkPYTq0r/beige-bermuda-shorts.jpg",
    ],
    sizes: ["M", "L", "XL"],
    description:
      "Comfortable loose fit bermuda shorts perfect for summer days. Lightweight and breathable fabric keeps you cool all day long.",
    descriptionTranslated:
      "Surwaal gaaban Bermuda raaxo leh oo ku habboon maalmaha xagaaga. Dhar fudud oo neef qaadan kara ayaa ku ilaalinaya qabow maalinta oo dhan.",
    material: "65% Cotton, 35% Polyester",
    materialTranslated: "65% Suuf, 35% Polyester",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Tom H.",
        rating: 3,
        date: "June 10, 2023",
        text: "Decent shorts for the price. They're comfortable but the material could be better.",
        verified: true,
      },
      {
        name: "Chris W.",
        rating: 3,
        date: "June 14, 2023",
        text: "Good for casual wear. Fit is a bit loose but that's what I expected.",
        verified: false,
      },
    ],
  },
  {
    id: "7",
    name: "Faded Skinny Jeans",
    nameTranslated: "Surwaal Caato Faded",
    category: "men",
    price: 10,
    rating: 4.5,
    reviewCount: 145,
    image: "https://i.ibb.co.com/yc8xz8mx/faded-blue-skinny-jeans.jpg",
    images: [
      "https://i.ibb.co.com/yc8xz8mx/faded-blue-skinny-jeans.jpg",
      "https://i.ibb.co.com/yc8xz8mx/faded-blue-skinny-jeans.jpg",
      "https://i.ibb.co.com/yc8xz8mx/faded-blue-skinny-jeans.jpg",
    ],
    sizes: ["28", "30", "32", "34", "36"],
    description:
      "Stylish faded skinny jeans with a vintage look. The perfect blend of comfort and style for the modern wardrobe.",
    descriptionTranslated:
      "Surwaal caato faded oo qaab qurux badan leh oo muuqaal hore leh. Isku dhafka ugu fiican ee raaxada iyo qaabka almaariga casriga ah.",
    material: "98% Cotton, 2% Elastane",
    materialTranslated: "98% Suuf, 2% Elastane",
    care: "Machine wash cold, hang dry",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji",
    reviews: [
      {
        name: "Jake S.",
        rating: 5,
        date: "August 5, 2023",
        text: "Love the faded look! These jeans fit perfectly and are very comfortable.",
        verified: true,
      },
      {
        name: "Amanda L.",
        rating: 4,
        date: "August 9, 2023",
        text: "Great jeans with a nice vintage vibe. The fit is slim but not too tight.",
        verified: true,
      },
    ],
  },

  {
    id: "9",
    name: "Gradient Graphic T-shirt",
    nameTranslated: "Shaati Gradient",
    category: "men",
    price: 10,
    rating: 3.5,
    reviewCount: 78,
    image: "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
    images: [
      "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
      "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
      "https://i.ibb.co.com/23ykXt8Q/orange-graphic-tee.png",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Modern gradient graphic t-shirt with eye-catching design. Made from soft, breathable fabric for all-day comfort.",
    descriptionTranslated:
      "Shaati gradient casri ah oo leh qaab soo jiidanaya. Waxaa lagu sameeyay dhar jilicsan oo neef qaadan kara si loo helo raaxo maalinta oo dhan.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Kevin M.",
        rating: 4,
        date: "September 12, 2023",
        text: "Cool design and comfortable fit. The gradient print is vibrant.",
        verified: true,
      },
      {
        name: "Nicole B.",
        rating: 3,
        date: "September 15, 2023",
        text: "Nice shirt but the print started fading after several washes.",
        verified: false,
      },
    ],
  },
  {
    id: "10",
    name: "Abaya",
    nameTranslated: "Abay",
    category: "women",
    price: 12,
    rating: 4.5,
    reviewCount: 98,
    image: "https://i.ibb.co.com/qL8NJTZ0/abaya.jpg",
    images: [
      "https://i.ibb.co.com/qL8NJTZ0/abaya.jpg",
      "https://i.ibb.co.com/qL8NJTZ0/abaya.jpg",
      "https://i.ibb.co.com/qL8NJTZ0/abaya.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Elegant and modest abaya perfect for any occasion. Made with high-quality fabric that drapes beautifully and provides comfort throughout the day.",
    descriptionTranslated:
      "Abay qurux badan oo edeb leh oo ku habboon xaalad kasta. Waxaa lagu sameeyay dhar tayo sare leh oo si qurux badan u dhacaya oo bixiya raaxo maalinta oo dhan.",
    material: "100% Polyester",
    materialTranslated: "100% Polyester",
    care: "Machine wash cold, hang dry",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji",
    reviews: [
      {
        name: "Fatima A.",
        rating: 5,
        date: "October 10, 2023",
        text: "Beautiful abaya with excellent quality. The fabric is soft and comfortable to wear all day.",
        verified: true,
      },
      {
        name: "Amina K.",
        rating: 4,
        date: "October 12, 2023",
        text: "Very elegant and modest. Fits perfectly and the material is great.",
        verified: true,
      },
    ],
  },
  {
    id: "11",
    name: "Hijab",
    nameTranslated: "Hijab",
    category: "women",
    price: 8,
    rating: 4.5,
    reviewCount: 145,
    image: "https://i.ibb.co.com/FbVKgMqq/hijab.jpg",
    images: [
      "https://i.ibb.co.com/FbVKgMqq/hijab.jpg",
      "https://i.ibb.co.com/FbVKgMqq/hijab.jpg",
      "https://i.ibb.co.com/FbVKgMqq/hijab.jpg",
    ],
    sizes: ["S", "M", "L"],
    description:
      "Premium quality hijab made from soft, breathable fabric. Perfect for everyday wear with its comfortable fit and elegant drape.",
    descriptionTranslated:
      "Hijab tayo sare leh oo lagu sameeyay dhar jilicsan oo neef qaadan kara. Ku habboon maalin kasta oo leh qaab raaxo leh iyo dhac qurux badan.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Hand wash cold, air dry",
    careTranslated: "Gacanta ku dhaq qabow, hawo ku qalaji",
    reviews: [
      {
        name: "Maryam S.",
        rating: 5,
        date: "September 25, 2023",
        text: "Excellent quality hijab! The fabric is soft and doesn't slip. Highly recommend.",
        verified: true,
      },
      {
        name: "Khadija M.",
        rating: 4,
        date: "September 28, 2023",
        text: "Very comfortable and stays in place well. Great value for the price.",
        verified: true,
      },
    ],
  },
  {
    id: "12",
    name: "Women's Dress",
    nameTranslated: "Dhar Dumarka",
    category: "women",
    price: 10,
    rating: 4.0,
    reviewCount: 87,
    image: "https://i.ibb.co.com/353BdfNX/women-dress.jpg",
    images: [
      "https://i.ibb.co.com/353BdfNX/women-dress.jpg",
      "https://i.ibb.co.com/353BdfNX/women-dress.jpg",
      "https://i.ibb.co.com/353BdfNX/women-dress.jpg",
    ],
    sizes: ["S", "M", "L"],
    description:
      "Stylish women's dress perfect for various occasions. Features a flattering cut and comfortable fabric that moves with you.",
    descriptionTranslated:
      "Dhar dumarka qaab qurux badan leh oo ku habboon xaalado kala duwan. Waxay leedahay qaab qurxiya iyo dhar raaxo leh oo kula dhaqaaqa.",
    material: "95% Cotton, 5% Elastane",
    materialTranslated: "95% Suuf, 5% Elastane",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Sarah J.",
        rating: 4,
        date: "August 30, 2023",
        text: "Beautiful dress with a nice fit. The fabric is comfortable and breathable.",
        verified: true,
      },
      {
        name: "Emma L.",
        rating: 4,
        date: "September 2, 2023",
        text: "Love this dress! It's versatile and can be dressed up or down.",
        verified: false,
      },
    ],
  },
  {
    id: "13",
    name: "Women's Outfit",
    nameTranslated: "Dhar Dumarka",
    category: "women",
    price: 15,
    rating: 5.0,
    reviewCount: 124,
    image: "https://i.ibb.co.com/GvjFzNRC/women-outfit.jpg",
    images: [
      "https://i.ibb.co.com/GvjFzNRC/women-outfit.jpg",
      "https://i.ibb.co.com/GvjFzNRC/women-outfit.jpg",
      "https://i.ibb.co.com/GvjFzNRC/women-outfit.jpg",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Complete women's outfit set that combines style and comfort. Perfect for creating a polished look effortlessly.",
    descriptionTranslated:
      "Dhar dumarka oo dhammaystiran oo isku dara qaab iyo raaxo. Ku habboon abuurista muuqaal qurux badan oo fudud.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Machine wash cold, hang dry",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji",
    reviews: [
      {
        name: "Rachel M.",
        rating: 5,
        date: "October 5, 2023",
        text: "Amazing outfit set! The quality is excellent and it fits perfectly. Worth every penny.",
        verified: true,
      },
      {
        name: "Lisa K.",
        rating: 5,
        date: "October 8, 2023",
        text: "Love this outfit! It's comfortable, stylish, and well-made. Highly recommend!",
        verified: true,
      },
    ],
  },
  {
    id: "14",
    name: "Women's Fashion",
    nameTranslated: "Dhar Dumarka",
    category: "women",
    price: 11,
    rating: 4.5,
    reviewCount: 156,
    image: "https://i.ibb.co.com/GvbYCfFs/women-fashion.jpg",
    images: [
      "https://i.ibb.co.com/GvbYCfFs/women-fashion.jpg",
      "https://i.ibb.co.com/GvbYCfFs/women-fashion.jpg",
      "https://i.ibb.co.com/GvbYCfFs/women-fashion.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Trendy fashion piece that elevates any wardrobe. Designed with attention to detail and quality craftsmanship.",
    descriptionTranslated:
      "Qalab fashion casri ah oo kor u qaada almaariga. Waxaa loogu talagalay iyadoo la eegayo faahfaahin iyo farsamada tayada sare.",
    material: "90% Polyester, 10% Elastane",
    materialTranslated: "90% Polyester, 10% Elastane",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Jessica P.",
        rating: 5,
        date: "September 18, 2023",
        text: "Absolutely love this! The design is modern and the fit is perfect.",
        verified: true,
      },
      {
        name: "Amanda R.",
        rating: 4,
        date: "September 21, 2023",
        text: "Great fashion piece. Good quality and looks exactly as pictured.",
        verified: true,
      },
    ],
  },
  {
    id: "15",
    name: "Beige Sweater",
    nameTranslated: "Sweater Beige",
    category: "women",
    price: 10,
    rating: 4.5,
    reviewCount: 112,
    image: "https://i.ibb.co.com/rTRjprH/woman-wearing-beige-sweater-fashion.jpg",
    images: [
      "https://i.ibb.co.com/rTRjprH/woman-wearing-beige-sweater-fashion.jpg",
      "https://i.ibb.co.com/rTRjprH/woman-wearing-beige-sweater-fashion.jpg",
      "https://i.ibb.co.com/rTRjprH/woman-wearing-beige-sweater-fashion.jpg",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Cozy beige sweater perfect for cooler days. Soft knit fabric provides warmth without sacrificing style.",
    descriptionTranslated:
      "Sweater beige raaxo leh oo ku habboon maalmaha qabow. Dhar jilicsan oo tolaya ayaa bixiya kulul iyada oo aan la hurin qaabka.",
    material: "70% Wool, 30% Acrylic",
    materialTranslated: "70% Dhogor, 30% Acrylic",
    care: "Hand wash cold, lay flat to dry",
    careTranslated: "Gacanta ku dhaq qabow, jiif si aad u qalajiso",
    reviews: [
      {
        name: "Jennifer L.",
        rating: 5,
        date: "October 5, 2023",
        text: "Absolutely love this sweater! It's so soft and warm. Perfect for fall weather.",
        verified: true,
      },
      {
        name: "Michelle P.",
        rating: 4,
        date: "October 8, 2023",
        text: "Beautiful color and very comfortable. Runs slightly large but still looks great.",
        verified: true,
      },
    ],
  },
  {
    id: "16",
    name: "Casual Dress",
    nameTranslated: "Dhar Caadi ah",
    category: "women",
    price: 5,
    rating: 4.0,
    reviewCount: 87,
    image: "https://i.ibb.co.com/kstSPRsz/casual-woman.png",
    images: [
      "https://i.ibb.co.com/kstSPRsz/casual-woman.png",
      "https://i.ibb.co.com/kstSPRsz/casual-woman.png",
      "https://i.ibb.co.com/kstSPRsz/casual-woman.png",
    ],
    sizes: ["S", "M", "L"],
    description: "Versatile casual dress suitable for various occasions. Comfortable fit with a flattering silhouette.",
    descriptionTranslated:
      "Dhar caadi ah oo kala duwan oo ku habboon xaalado kala duwan. Qaab raaxo leh oo leh muuqaal qurux badan.",
    material: "95% Cotton, 5% Elastane",
    materialTranslated: "95% Suuf, 5% Elastane",
    care: "Machine wash cold, hang dry",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji",
    reviews: [
      {
        name: "Ashley M.",
        rating: 4,
        date: "September 20, 2023",
        text: "Great everyday dress. Comfortable and easy to style with different accessories.",
        verified: true,
      },
      {
        name: "Brittany S.",
        rating: 4,
        date: "September 23, 2023",
        text: "Love this dress! It's perfect for casual outings and the fabric is soft.",
        verified: false,
      },
    ],
  },
  {
    id: "17",
    name: "Elegant Black Dress",
    nameTranslated: "Dhar Madow Qurux badan",
    category: "women",
    price: 7,
    rating: 5.0,
    reviewCount: 203,
    image: "https://i.ibb.co.com/4nvxRcSt/elegant-black-dress.png",
    images: [
      "https://i.ibb.co.com/4nvxRcSt/elegant-black-dress.png",
      "https://i.ibb.co.com/4nvxRcSt/elegant-black-dress.png",
      "https://i.ibb.co.com/4nvxRcSt/elegant-black-dress.png",
    ],
    sizes: ["XS", "S", "M", "L"],
    description:
      "Sophisticated black dress perfect for formal events. Timeless elegance with a modern cut that flatters every figure.",
    descriptionTranslated:
      "Dhar madow sharaf leh oo ku habboon xafladaha rasmiga ah. Qurux weligeed jirta oo leh qaab casri ah oo u qurxiya jir kasta.",
    material: "100% Polyester",
    materialTranslated: "100% Polyester",
    care: "Dry clean only",
    careTranslated: "Nadiifi engegan oo keliya",
    reviews: [
      {
        name: "Victoria H.",
        rating: 5,
        date: "October 15, 2023",
        text: "Stunning dress! I wore it to a wedding and received so many compliments. The fit is perfect.",
        verified: true,
      },
      {
        name: "Catherine W.",
        rating: 5,
        date: "October 18, 2023",
        text: "This dress is worth every penny. Elegant, well-made, and fits beautifully.",
        verified: true,
      },
    ],
  },
  {
    id: "18",
    name: "Denim Jacket",
    nameTranslated: "Jaakad Denim",
    category: "women",
    price: 10,
    rating: 4.5,
    reviewCount: 156,
    image: "https://i.ibb.co.com/LX8T9Pvm/women-denim-jacket.jpg",
    images: [
      "https://i.ibb.co.com/LX8T9Pvm/women-denim-jacket.jpg",
      "https://i.ibb.co.com/LX8T9Pvm/women-denim-jacket.jpg",
      "https://i.ibb.co.com/LX8T9Pvm/women-denim-jacket.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic denim jacket that never goes out of style. Perfect layering piece for any season with its versatile design.",
    descriptionTranslated:
      "Jaakad denim qadiimi ah oo aan weligeed ka bixin qaabka. Qalab ku habboon xilli kasta oo leh qaab kala duwan.",
    material: "100% Cotton Denim",
    materialTranslated: "100% Suuf Denim",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Laura K.",
        rating: 5,
        date: "September 28, 2023",
        text: "Love this jacket! It goes with everything and the quality is excellent.",
        verified: true,
      },
      {
        name: "Megan T.",
        rating: 4,
        date: "October 1, 2023",
        text: "Great denim jacket. Fits true to size and looks stylish.",
        verified: true,
      },
    ],
  },
  {
    id: "19",
    name: "Kids Casual Set",
    nameTranslated: "Dhar Caruureed Caadi ah",
    category: "kids",
    price: 9,
    rating: 4.0,
    reviewCount: 94,
    image: "https://i.ibb.co.com/trBbSrM/kids-wearing-casual-clothes-fashion.jpg",
    images: [
      "https://i.ibb.co.com/trBbSrM/kids-wearing-casual-clothes-fashion.jpg",
      "https://i.ibb.co.com/trBbSrM/kids-wearing-casual-clothes-fashion.jpg",
      "https://i.ibb.co.com/trBbSrM/kids-wearing-casual-clothes-fashion.jpg",
    ],
    sizes: ["XS", "S", "M"],
    description:
      "Comfortable casual set for kids. Durable fabric that can withstand active play while keeping them stylish.",
    descriptionTranslated:
      "Dhar caadi ah oo raaxo leh caruurta. Dhar adag oo u adkaysan kara ciyaar firfircoon halka ay ku ilaalinayaan qaab qurux badan.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Machine wash warm, tumble dry low",
    careTranslated: "Mashiinka ku dhaq kulul, qalaji hoose",
    reviews: [
      {
        name: "Patricia M.",
        rating: 5,
        date: "September 10, 2023",
        text: "My son loves these clothes! They're comfortable and hold up well after washing.",
        verified: true,
      },
      {
        name: "Karen D.",
        rating: 4,
        date: "September 14, 2023",
        text: "Good quality kids clothing. The set is cute and practical.",
        verified: false,
      },
    ],
  },
  {
    id: "20",
    name: "Kids Hoodie",
    nameTranslated: "Hoodie Caruureed",
    category: "kids",
    price: 5,
    rating: 4.5,
    reviewCount: 128,
    image: "https://i.ibb.co.com/6JcfkhH4/colorful-kids-hoodie.png",
    images: [
      "https://i.ibb.co.com/6JcfkhH4/colorful-kids-hoodie.png",
      "https://i.ibb.co.com/6JcfkhH4/colorful-kids-hoodie.png",
      "https://i.ibb.co.com/6JcfkhH4/colorful-kids-hoodie.png",
    ],
    sizes: ["XS", "S", "M", "L"],
    description: "Colorful and cozy hoodie for kids. Soft fleece lining keeps them warm during cooler weather.",
    descriptionTranslated:
      "Hoodie midab badan oo raaxo leh caruurta. Dhar jilicsan oo gudaha ah ayaa ku ilaalinaya kulul xilliga qabow.",
    material: "80% Cotton, 20% Polyester",
    materialTranslated: "80% Suuf, 20% Polyester",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Susan R.",
        rating: 5,
        date: "September 10, 2023",
        text: "My son loves this hoodie! The colors are bright and it's very warm.",
        verified: true,
      },
      {
        name: "Barbara J.",
        rating: 4,
        date: "September 14, 2023",
        text: "Great hoodie for kids. Good quality and fits well.",
        verified: true,
      },
    ],
  },
  {
    id: "21",
    name: "Kids Jeans",
    nameTranslated: "Jeans Caruureed",
    category: "kids",
    price: 8,
    rating: 4.0,
    reviewCount: 76,
    image: "https://i.ibb.co.com/3yMwrN2L/kids-jeans.png",
    images: [
      "https://i.ibb.co.com/3yMwrN2L/kids-jeans.png",
      "https://i.ibb.co.com/3yMwrN2L/kids-jeans.png",
      "https://i.ibb.co.com/3yMwrN2L/kids-jeans.png",
    ],
    sizes: ["XS", "S", "M"],
    description: "Durable kids jeans built to last. Comfortable fit with reinforced knees for active children.",
    descriptionTranslated:
      "Jeans caruureed adag oo u dhisan inay raagaan. Qaab raaxo leh oo leh jilbo xooggan carruurta firfircoon.",
    material: "98% Cotton, 2% Elastane",
    materialTranslated: "98% Suuf, 2% Elastane",
    care: "Machine wash cold, tumble dry low",
    careTranslated: "Mashiinka ku dhaq qabow, qalaji hoose",
    reviews: [
      {
        name: "Nancy W.",
        rating: 4,
        date: "July 25, 2023",
        text: "Good quality jeans for kids. They hold up well even with rough play.",
        verified: true,
      },
      {
        name: "Helen G.",
        rating: 4,
        date: "July 29, 2023",
        text: "My daughter loves these jeans. They fit well and are comfortable.",
        verified: false,
      },
    ],
  },
  {
    id: "22",
    name: "Kids T-shirt Pack",
    nameTranslated: "Shaadh Caruureed",
    category: "kids",
    price: 8,
    rating: 4.5,
    reviewCount: 112,
    image: "https://i.ibb.co.com/K8H9WhX/kids-colorful-t-shirts.jpg",
    images: [
      "https://i.ibb.co.com/K8H9WhX/kids-colorful-t-shirts.jpg",
      "https://i.ibb.co.com/K8H9WhX/kids-colorful-t-shirts.jpg",
      "https://i.ibb.co.com/K8H9WhX/kids-colorful-t-shirts.jpg",
    ],
    sizes: ["XS", "S", "M"],
    description: "Colorful pack of kids t-shirts perfect for everyday wear. Soft, comfortable fabric that kids love.",
    descriptionTranslated:
      "Xirmo shaadh midab badan oo caruureed oo ku habboon maalin kasta. Dhar jilicsan oo raaxo leh oo carruurtu jeclaadaan.",
    material: "100% Cotton",
    materialTranslated: "100% Suuf",
    care: "Machine wash warm, tumble dry low",
    careTranslated: "Mashiinka ku dhaq kulul, qalaji hoose",
    reviews: [
      {
        name: "Maria S.",
        rating: 5,
        date: "August 15, 2023",
        text: "Great value pack! The colors are vibrant and my kids love wearing them.",
        verified: true,
      },
      {
        name: "Jennifer K.",
        rating: 4,
        date: "August 18, 2023",
        text: "Good quality t-shirts. They wash well and maintain their shape.",
        verified: true,
      },
    ],
  },
]

interface ProductDetailProps {
  productId: string
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const { language } = useLanguage()
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showComingSoon, setShowComingSoon] = useState(false)

  const t = translations[language]

  // Find product by ID
  const product = productsData.find((p) => p.id === productId) || productsData[0]

  useEffect(() => {
    console.log("[v0] Product ID changed, resetting state")
    setSelectedSize("")
    setQuantity(1)
    setSelectedImage(0)
    setShowComingSoon(false)
  }, [productId])

  const handleBuyNow = () => {
    setShowComingSoon(true)
  }

  const handleAddToCart = () => {
    setShowComingSoon(true)
  }

  const getCategoryPath = () => {
    switch (product.category) {
      case "men":
        return "/men"
      case "women":
        return "/women"
      case "kids":
        return "/kids"
      default:
        return "/men"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">{t.home}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={getCategoryPath()}>
                  {product.category === "men" ? t.men : product.category === "women" ? t.women : t.kids}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{language === "en" ? product.name : product.nameTranslated}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Button variant="ghost" asChild className="mb-6">
          <Link href={getCategoryPath()}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            {t.backToProducts}
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border border-border">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={language === "en" ? product.name : product.nameTranslated}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {language === "en" ? product.name : product.nameTranslated}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : i < product.rating
                            ? "fill-yellow-400/50 text-yellow-400"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating}/5 ({product.reviewCount} {t.reviews})
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-foreground">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {language === "en" ? product.description : product.descriptionTranslated}
            </p>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">{t.selectSize}</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className="min-w-[60px]"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">{t.quantity}</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button onClick={handleAddToCart} variant="outline" className="flex-1 bg-transparent">
                {t.addToCart}
              </Button>
              <Button onClick={handleBuyNow} className="flex-1">
                {t.buyNow}
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details and Reviews Tabs */}
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="details">{t.productDetails}</TabsTrigger>
            <TabsTrigger value="reviews">{t.reviews}</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-6">
            <Card className="border-border">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t.description}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "en" ? product.description : product.descriptionTranslated}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t.material}</h3>
                  <p className="text-muted-foreground">
                    {language === "en" ? product.material : product.materialTranslated}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{t.careInstructions}</h3>
                  <p className="text-muted-foreground">{language === "en" ? product.care : product.careTranslated}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">
                  {t.allReviews} ({product.reviewCount})
                </h3>
                <Button variant="outline" className="bg-transparent">
                  {t.writeReview}
                </Button>
              </div>

              <div className="space-y-4">
                {product.reviews.map((review, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                            {review.verified && (
                              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                                {t.verified}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
      <ComingSoonModal open={showComingSoon} onOpenChange={setShowComingSoon} />
    </div>
  )
}
