export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  category: string
  emoji: string
  rating: number
  stock: number
}

export interface ProductFilters {
  search?: string
  category?: string
}