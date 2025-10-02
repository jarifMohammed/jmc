export function BrandSection() {
  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "Calvin Klein"]

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-xl md:text-2xl font-bold text-foreground opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
