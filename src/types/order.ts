export interface OrderItem{
    productId: number
    name : string
    price : number 
    quantity : number
}

export interface CreateOrderPayload {
    items: OrderItem[]
    fullName : string
    phone : number
    address : string
    city : string
}

export interface IOrder extends CreateOrderPayload {
    id: string 
    total: number 
}

