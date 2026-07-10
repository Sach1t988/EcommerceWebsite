import { defineStore } from "pinia"
import { ref } from "vue"
import type { Product } from "~/types/products"

export interface CartItem extends Product {
  quantity: number
}

export const useCartStore = defineStore("cart", () => {

  const items = ref<CartItem[]>([])

  const addItem = (product: Product) => {
    const existingItem = items.value.find(
      item => item.id === product.id
    )

    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({
        ...product,
        quantity: 1
      })
    }
  }

  return {
    items,
    addItem
  }

})