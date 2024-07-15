export interface product {
  id: number
  title: string
  price: number
  rating: number
  description: string
  images: Array<string>
  creationAt: string
  updatedAt: string
  category: {
    id: number
    name: string
    image: string
    creationAt: string
    updatedAt: string
  }
}