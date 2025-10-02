import { ProductDetail } from "@/components/product-detail"

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail key={params.id} productId={params.id} />
}
