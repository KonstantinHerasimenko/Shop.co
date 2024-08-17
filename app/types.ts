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

export interface review {
  id: number
  body: string
  rating: number
  userId: number
  cardId: number
  posted: string
}

export interface user {
  userId: number
  name: { first: string; last: string }
  email: string
  login: { username: string; password: string }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  cart: number[]
}
