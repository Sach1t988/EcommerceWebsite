<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]

import { type Product } from '~/types/products';
import Cart from './cart.vue';
import { computed, ref } from 'vue';

const {data: products,error} = await useFetch<Product[]>(()=>
    `https://fakestoreapi.com/products`
)

const searchQuery = useSearchQuery()

// const filteredProducts = computed(() => {
//   if (!products.value) return []
//   console.log(products.value)

//   return products.value.filter((product) => {
//     return product.title
//       .toLowerCase()
//       .includes(searchQuery.value.toLowerCase())
//   })
// })

const filteredProducts = computed(() => {
  if (!products.value) return []

  console.log("Search:", searchQuery.value)

  const result = products.value.filter(product => {
    const matches = product.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())

    console.log(product.title, "=>", matches)

    return matches
  })

  console.log("Result:", result)

  return result
})



const toast = useToast()

const {addToCart} = useCart()


</script>

<template>
  <div class="container mx-auto px-6 py-16">

    <!-- HERO SECTION -->
    <div class="flex items-center justify-between gap-12">

      <!-- Left -->
      <div class="w-1/3">
        <h1 class="text-6xl font-light mb-4">
          Search, Add, Buy
        </h1>

        <p class="text-2xl text-gray-500">
          Search for the best products in each categories
        </p>
      </div>

      <!-- Right -->
      <div class="w-2/3">
        <UCarousel
          v-slot="{ item }"
          :items="items"
          loop
          arrows
          :autoplay="{ delay: 2000 }"
          wheel-gestures
          :ui="{
            item: 'basis-1/2 ps-4',
            prev: 'left-2',
            next: 'right-2'
          }"
        >
          <img
            :src="item"
            class="w-full h-80 object-cover rounded-lg"
          >
        </UCarousel>
      </div>

    </div>

    <!-- PRODUCTS SECTION -->
    <div class="mt-20">

      <h2 class="text-3xl font-bold mb-8">
        Featured Products
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <UCard
          v-for="product in filteredProducts"
          :key="product.id"
        >
        <NuxtLink :to="`/products/${product.id}`">
         <NuxtImg
    :src="product.image"
    sizes="xs:100vw sm:50vw lg:300px"
    format="webp"
    densities="x1"
    class="h-60 w-full object-contain rounded-t-md bg-white p-4"
  /></NuxtLink>

  <div class="flex flex-col py-6 px-4 flex-1">

    <!-- Product Title -->
    <p class="text-lg font-semibold line-clamp-2 mb-3">
      {{ product.title }}
    </p>

    <!-- Category & Rating -->
    <div class="flex flex-wrap gap-2 mb-4">

      <UBadge
        color="secondary"
        variant="soft"
        icon="i-mdi-shape"
      >
        {{ product.category }}
      </UBadge>

      <UBadge
        color="error"
        variant="soft"
        icon="i-mdi-star"
      >
        {{ product.rating.rate }}
      </UBadge>

      <UBadge
        color="warning"
        variant="soft"
        icon="i-mdi-account-group"
      >
        {{ product.rating.count }}
      </UBadge>

    </div>

    <!-- Price -->
    <p class="text-2xl font-bold text-primary mb-4">
      ${{ product.price }}
    </p>

    <!-- Button -->
     <NuxtLink :to="`/products/${product.id}`">
     <UButton
        color="primary"
        block
        >
        View
    </UButton>
    </NuxtLink>

    <br>
    <UButton
      color="primary"
      block
      @click="addToCart(product)"
    >
      Add to Cart
    </UButton>

  </div>
        </UCard>

      </div>

    </div>

  </div>
</template>



