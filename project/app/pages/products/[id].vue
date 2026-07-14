<script setup lang="ts">
import { type Product } from '~/types/products';

const {id} = useRoute().params;
const {data : product ,error} = await useFetch<Product>(`https://fakestoreapi.com/products/${id}`)
    if(error.value){
        throw createError({
            statusCode : error.value?.statusCode,
            statusMessage: error.value?.statusMessage,

            });
    }

const {addToCart} = useCart()
</script>


<template>
    <div class="py-6">
  <UButton
    to="/"
    icon="i-lucide-chevron-left"
    variant="ghost"
    color="neutral"
  >
    Continue Shopping
  </UButton>
</div>
  <div
    v-if="product"
    class="container mx-auto px-6 py-12"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

      <!-- Image -->
      <div class="bg-white rounded-xl border p-10 flex justify-center">
        <NuxtImg
          :src="product.image"
          class="h-125 object-contain"
        />
      </div>

      <!-- Product Info -->
      <div class="flex flex-col">

        <h1 class="text-4xl font-bold">
          {{ product.title }}
        </h1>

        <div class="flex gap-3 mt-5">

          <UBadge
            color="primary"
            variant="soft"
          >
            {{ product.category }}
          </UBadge>

          <UBadge
            color="warning"
            variant="soft"
            icon="i-mdi-star"
          >
            {{ product.rating.rate }}
          </UBadge>

          <UBadge
            color="neutral"
            variant="soft"
          >
            {{ product.rating.count }} Reviews
          </UBadge>

        </div>

        <p class="mt-8 text-gray-600 leading-8">
          {{ product.description }}
        </p>

        <!-- Price -->

        <div class="mt-10">

          <p class="text-sm text-gray-500">
            Price
          </p>

          <p class="text-5xl font-bold text-green-600">
            ${{ product.price }}
          </p>

        </div>

        <!-- Button -->

        <UButton
          to="/cart"
          color="primary"
          size="xl"
          class="mt-10"
          block
          @click="addToCart(product)"
        >
          Add to Cart
        </UButton>

      </div>

    </div>
  </div>
</template>



