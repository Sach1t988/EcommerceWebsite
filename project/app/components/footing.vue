<!--
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [{
  label: 'Figma Kit',
  to: 'https://go.nuxt.com/figma-ui',
  target: '_blank'
}, {
  label: 'Playground',
  to: 'https://stackblitz.com/edit/nuxt-ui',
  target: '_blank'
}, {
  label: 'Releases',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]

</!-->

<!-- <template>
  <UFooter>
    <template #right>
      <p class="text-muted text-sm">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #left>
      <UButton
        icon="i-simple-icons-discord"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/discord"
        target="_blank"
        aria-label="Discord"
      />
      <UButton
        icon="i-simple-icons-x"
        color="neutral"
        variant="ghost"
        to="https://go.nuxt.com/x"
        target="_blank"
        aria-label="X"
      />
      <UButton
        icon="i-simple-icons-github"
        color="neutral"
        variant="ghost"
        to="https://github.com/nuxt/nuxt"
        target="_blank"
        aria-label="GitHub"
      />
    </template>
  </UFooter>
</template> -->


<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const shopLinks: NavigationMenuItem[] = [
  { label: 'New Arrivals', to: '/products' },
  { label: 'Best Sellers', to: '/products' },
  { label: 'Gift Cards', to: '/about' },
  { label: 'Track Your Order', to: '/checkout' }
]

const supportLinks: NavigationMenuItem[] = [
  { label: 'Shipping & Delivery', to: '/about' },
  { label: 'Returns & Exchanges', to: '/about' },
  { label: 'Customer Support', to: '/about' },
  { label: 'FAQs', to: '/about' }
]

const companyLinks: NavigationMenuItem[] = [
  { label: 'About Ecommerce', to: '/about' },
  { label: 'Our Story', to: '/about' },
  { label: 'Careers', to: '/about' },
  { label: 'Contact Us', to: '/about' }
]
</script>

<template>
  <UFooter class="border-t border-gray-200 bg-white/95">
    <div class="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-900">
            Ecommerce
          </h3>
          <p class="mt-3 text-sm leading-6 text-gray-600">
            Premium products, fast delivery, and a shopping experience built for everyday convenience.
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <UButton
              icon="i-simple-icons-instagram"
              color="neutral"
              variant="ghost"
              to="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            />
            <UButton
              icon="i-simple-icons-x"
              color="neutral"
              variant="ghost"
              to="https://x.com"
              target="_blank"
              aria-label="X"
            />
            <UButton
              icon="i-simple-icons-github"
              color="neutral"
              variant="ghost"
              to="https://github.com"
              target="_blank"
              aria-label="GitHub"
            />
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-900">
            Shop
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in shopLinks" :key="item.label">
              <NuxtLink :to="item.to" class="transition hover:text-primary">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-900">
            Support
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in supportLinks" :key="item.label">
              <NuxtLink :to="item.to" class="transition hover:text-primary">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold uppercase tracking-[0.2em] text-gray-900">
            Company
          </h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li v-for="item in companyLinks" :key="item.label">
              <NuxtLink :to="item.to" class="transition hover:text-primary">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {{ new Date().getFullYear() }} Ecommerce. All rights reserved.
        </p>
        <div class="flex flex-wrap gap-4">
          <NuxtLink to="/about" class="transition hover:text-primary">
            About Us
          </NuxtLink>
          <NuxtLink to="/checkout" class="transition hover:text-primary">
            Checkout
          </NuxtLink>
          <NuxtLink to="/cart" class="transition hover:text-primary">
            Cart
          </NuxtLink>
        </div>
      </div>
    </div>
  </UFooter>
</template>

