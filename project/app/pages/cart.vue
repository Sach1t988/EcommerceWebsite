<script setup lang="ts">
const cartStore = useCartStore()

console.log("Cart page items:", cartStore.items)
console.log("Cart page length:", cartStore.items.length)
</script>

<template>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

  <!-- LEFT COLUMN -->
  <div class="lg:col-span-2 min-w-0">

    
    <div
  v-if="cartStore.items.length === 0"
  class="text-center py-20"
>
<div class="flex flex-col items-center justify-center min-h-[60vh] lg:translate-x-1/4">
  <h2 class="text-3xl font-bold">
    Your cart is empty
  </h2>

  <p class="text-gray-500 mt-4">
    Add some products to get started.
  </p>

  <UButton
    to="/"
    class="mt-8"
  >
    Continue Shopping
  </UButton>
</div>
</div>


    <div v-else>
  
  <div class="py-12">

    <h1 class="text-4xl font-bold mb-10">
      Shopping Cart
    </h1>

    <div
      v-for="item in cartStore.items"
      :key="item.id"
      class="flex items-center gap-6 border rounded-xl p-6 mb-6 min-w-0"
    >

      <NuxtImg
        :src="item.image"
        class="h-32 w-32 object-contain"
      />

      <div class="flex-1 min-w-0">

        <h2 class="text-xl font-semibold">
          {{ item.title }}
        </h2>

        <p class="text-gray-500 mt-2">
          {{ item.category }}
        </p>

        <p class="text-2xl font-bold mt-4">
          ${{ item.price }}
        </p>

        <p class="mt-2">
          Quantity: {{ item.quantity }}
        </p>
        <div class="flex items-center gap-4 mt-4">

  <UButton
    icon="i-lucide-minus"
    color="neutral"
    variant="outline"
    @click="cartStore.decreaseQuantity(item.id)"
  />

  <span class="text-lg font-semibold">
    {{ item.quantity }}
  </span>

  <UButton
    icon="i-lucide-plus"
    color="primary"
    @click="cartStore.increaseQuantity(item.id)"
  />
  <UButton
  color="error"
  variant="soft"
  icon="i-lucide-trash-2"
  @click="cartStore.removeItem(item.id)"
>
  Remove
</UButton>


</div>

      </div>

    </div>

  </div>
  
 

  


</div>


  </div>

  <!-- RIGHT COLUMN -->
  <div
    v-if="cartStore.items.length > 0"
    class="lg:pr-6"
  >

     <div class="py-12">

    
    <UCard>

      <h2 class="text-2xl font-bold mb-6">
        Order Summary
      </h2>

      <div class="space-y-4">

        <div class="flex justify-between">
          <span>Items</span>
          <span>{{ cartStore.totalItems }}</span>
        </div>

        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>${{ cartStore.totalPrice.toFixed(2) }}</span>
        </div>

        <div class="flex justify-between">
          <span>Shipping</span>
          <span class="text-green-600">
            Free
          </span>
        </div>

        <UDivider />

        <div class="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>
            ${{ cartStore.totalPrice.toFixed(2) }}
          </span>
        </div>

        <UButton
            to="/checkout"
          block
          size="xl"
          class="mt-6"
        >
          Checkout
        </UButton>

      </div>

    </UCard>

  </div>

  </div>

</div>
</template>


