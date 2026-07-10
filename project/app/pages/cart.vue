<script setup lang="ts">
const cartStore = useCartStore()
</script>

<template>
    <UButton
    to="/"
    icon="i-lucide-chevron-left"
    variant="ghost"
    color="neutral"
  > Continue Shopping </UButton>
 <div
  v-if="cartStore.items.length === 0"
  class="text-center py-20"
>
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

<div v-else>
  
  <div class="container mx-auto px-6 py-12">

    <h1 class="text-4xl font-bold mb-10">
      Shopping Cart
    </h1>

    <div
      v-for="item in cartStore.items"
      :key="item.id"
      class="flex items-center gap-6 border rounded-xl p-6 mb-6"
    >

      <NuxtImg
        :src="item.image"
        class="h-32 w-32 object-contain"
      />

      <div class="flex-1">

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

      </div>

    </div>

  </div>

</div>
</template>



