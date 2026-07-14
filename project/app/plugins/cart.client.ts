export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:mounted", () => {
    const cartStore = useCartStore()
    cartStore.loadCart()
  })
})