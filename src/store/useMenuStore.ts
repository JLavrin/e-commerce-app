import { create } from 'zustand'

type Store = {
  isOpen: boolean
  toggle: VoidFunction
}

const useMenuStore = create<Store>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen }))
}))

export default useMenuStore
