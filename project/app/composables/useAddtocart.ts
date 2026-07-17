import type { Product } from '~/types/products'

export const useCart = () => {
  const toast = useToast()
  const cartStore = useCartStore()

  const addToCart = (product: Product) => {

    cartStore.addItem(product)

    toast.add({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
      color: "success",
      icon: "i-lucide-shopping-cart"
    })
  }

  return {
    addToCart
  }
}



