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

  const increaseQuantity = (id: number) => {
  const item = items.value.find(item => item.id === id)

  if (item) {
    item.quantity++
  }
}

const decreaseQuantity = (id: number) => {
  const item = items.value.find(item => item.id === id)

  if (!item) return

  if (item.quantity > 1) {
    item.quantity--
  }
}

const removeItem = (id: number) => {
  items.value = items.value.filter(item => item.id !== id)
}

const totalItems = computed(() => 
    items.value.reduce(
        (total, item) => total + item.quantity,
        0
    
    )
)

const totalPrice = computed(()=>
    items.value.reduce(
        (total, items) => total +items.price * items.quantity,
        0
    )
)

  return {
    items,
    addItem,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalItems,
    totalPrice
  }

})