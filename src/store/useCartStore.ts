import { create } from 'zustand'

type Store = {
  cart: any
  cartLength: number
  setCartLength: (length: number) => void
  updateCart: (item: any) => void
  handleRemove: (id: any) => void
}

const useCartStore = create<Store>((set) => ({
  cart: [],
  cartLength: 0,
  setCartLength: (length) => set((state) => ({ cartLength: length })),
  updateCart: (item) => set((state) => ({ cart: item })),
  handleRemove: (id) => () => set((state) => ({ cart: state.cart.filter((item: any) => item.id !== id) })),
}))

export default useCartStore
