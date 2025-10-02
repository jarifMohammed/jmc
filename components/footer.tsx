"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const translations = {
  en: {
    company: "COMPANY",
    help: "HELP",
    faq: "FAQ",
    resources: "RESOURCES",
    about: "About",
    features: "Features",
    works: "Works",
    career: "Career",
    customerSupport: "Customer Support",
    deliveryDetails: "Delivery Details",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
    freeResources: "Free eBooks",
    developmentTutorial: "Development Tutorial",
    howToBlog: "How to - Blog",
    youtubePlaylist: "Youtube Playlist",
  },
  so: {
    company: "SHIRKADDA",
    help: "CAAWIMAAD",
    faq: "SU'AALAHA BADANAA LA WEYDIIYO",
    resources: "KHEYRAADKA",
    about: "Ku saabsan",
    features: "Sifooyinka",
    works: "Shaqooyinka",
    career: "Shaqo",
    customerSupport: "Taageerada Macaamiisha",
    deliveryDetails: "Faahfaahinta Gaarsiinta",
    termsConditions: "Shuruudaha & Xaaladaha",
    privacyPolicy: "Siyaasadda Sirta",
    freeResources: "Buugaag Bilaash ah",
    developmentTutorial: "Cashar Horumarinta",
    howToBlog: "Sida loo - Blog",
    youtubePlaylist: "Liiska Ciyaaraha Youtube",
  },
}

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="bg-background">
      <div className="bg-black text-white py-10 px-6 rounded-3xl mx-4 md:mx-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-[40px] font-bold max-w-xl text-balance leading-tight">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-3 w-full md:w-auto md:min-w-[350px]">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter your email address"
                className="pl-12 bg-white text-black rounded-full h-12 border-0"
              />
            </div>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full h-12 font-medium">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 mb-10">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-['Alfa_Slab_One']">JMC MARKET SHOP</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full border border-gray-300 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4 tracking-wider">{t.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.features}
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.works}
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.career}
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-foreground mb-4 tracking-wider">{t.help}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.customerSupport}
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.deliveryDetails}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.termsConditions}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="font-bold text-foreground mb-4 tracking-wider">{t.faq}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/account" className="text-muted-foreground hover:text-foreground text-sm">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-muted-foreground hover:text-foreground text-sm">
                  Manage Deliveries
                </Link>
              </li>
              <li>
                <Link href="/orders" className="text-muted-foreground hover:text-foreground text-sm">
                  Orders
                </Link>
              </li>
              <li>
                <Link href="/payments" className="text-muted-foreground hover:text-foreground text-sm">
                  Payments
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4 tracking-wider">{t.resources}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ebooks" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.freeResources}
                </Link>
              </li>
              <li>
                <Link href="/tutorial" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.developmentTutorial}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.howToBlog}
                </Link>
              </li>
              <li>
                <Link href="/youtube" className="text-muted-foreground hover:text-foreground text-sm">
                  {t.youtubePlaylist}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">JMC MARKET SHOP © 2000-2023, All Rights Reserved</p>
          
        </div>
      </div>
    </footer>
  )
}
