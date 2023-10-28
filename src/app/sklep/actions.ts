'use server'

import { Product } from '@/app/sklep/[categoryId]/data'

export async function handleAddToCart(prevState:any, payload: { e: FormData, price: number, name: string, quantity: number, product: Product, cartLength: any, cart: any}) {
  const count = (payload.cartLength || 0) + 1

  const quantity = payload.e.get('quantity')
  const size = payload.e.get('size')

  if (payload.cart.some((item: any) => item.product.name === payload.product.name)) {
    const cart = payload.cart.map((item: any) => {
      if (item.product.name === payload.product.name) {
        return {
          ...item,
          quantity: Number(quantity) + item.quantity
        }
      }
      return item
    })
    return {
      newCount: count,
      message: 'Dodano do koszyka',
      cart: cart
    }
  }

  const cart = [
    ...payload.cart,
    {
      id: payload.cart.length,
      quantity: Number(quantity),
      size: size,
      product: payload.product
    }
  ]

  console.log('cart', cart, payload.cart)
  return {
    newCount: count,
    message: 'Dodano do koszyka',
    cart: cart
  }
}
