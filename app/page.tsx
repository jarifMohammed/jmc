import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { BrandSection } from "@/components/brand-section"
import { NewArrivals } from "@/components/new-arrivals"
import { TopSelling } from "@/components/top-selling"
import { BrowseByGender } from "@/components/browse-by-gender"
import { CustomerReviews } from "@/components/customer-reviews"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <BrandSection />
        <NewArrivals />
        <TopSelling />
        <BrowseByGender />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  )
}
