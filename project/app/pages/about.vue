<script setup lang="ts">
const values = [
  {
    title: 'Curated selection',
    description: 'We handpick top-rated products from trusted brands so every buy feels smart and reliable.',
    icon: 'i-lucide-star',
  },
  {
    title: 'Fast delivery',
    description: 'Quick shipping and clear tracking help you stay in control from order to doorstep.',
    icon: 'i-lucide-truck',
  },
  {
    title: 'Local support',
    description: 'A friendly support team stands by to help with every question, return, or recommendation.',
    icon: 'i-lucide-headphones',
  },
]

const stats = [
  { label: 'Curated products', value: '2,000+' },
  { label: 'Happy customers', value: '18,500+' },
  { label: 'Same-day dispatch', value: '99.8%' },
]
</script>

<template>
  <div class="container mx-auto px-6 py-16">
    <section class="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center">
      <div class="space-y-8">
        
        <h1 class="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Your curated marketplace for purposeful shopping.
        </h1>

        <p class="max-w-2xl text-lg leading-8 text-gray-600">
          From everyday essentials to standout finds, our mission is to make online shopping feel effortless, trustworthy, and a little more joyful.
        </p>

        <div class="flex flex-wrap gap-4">
          <UButton color="primary" size="xl" to="/">
            Shop the collection
          </UButton>
          <!-- <UButton variant="outline" color="primary" size="xl" to="/products">
            Browse products
          </UButton> -->
        </div>
      </div>

      <UCard class="overflow-hidden border-0 bg-linear-to-br from-green-50 via-white to-white shadow-xl">
        <div class="relative h-96">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80"
            alt="Modern ecommerce experience"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-x-0 bottom-0 bg-white/90 p-8 backdrop-blur-sm">
            <p class="text-sm uppercase tracking-[0.3em] text-green-700">
              Built for your lifestyle
            </p>
            <p class="mt-3 text-2xl font-semibold text-slate-900">
              Simple shopping, exceptional service.
            </p>
          </div>
        </div>
      </UCard>
    </section>

    <section class="mt-20 grid gap-8 lg:grid-cols-3">
      <div class="lg:col-span-2 space-y-6">
        <UCard class="p-10">
          <div class="space-y-6">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-green-600">Our story</p>
              <h2 class="mt-3 text-3xl font-bold">We bring the best products to your door with care.</h2>
            </div>

            <p class="text-gray-600 leading-8">
              Ecommerce started with a simple idea: shopping should be fast, beautiful and trustworthy. We combine thoughtful product curation, transparent pricing, and easy checkout so you can spend less time searching and more time enjoying the things you love.
            </p>

            <div class="grid gap-4 sm:grid-cols-3">
              <div class="rounded-3xl border border-slate-200 p-5">
                <p class="text-4xl font-extrabold text-green-600">100%</p>
                <p class="mt-3 text-sm text-gray-500">Satisfaction-first service</p>
              </div>
              <div class="rounded-3xl border border-slate-200 p-5">
                <p class="text-4xl font-extrabold text-green-600">Free</p>
                <p class="mt-3 text-sm text-gray-500">Shipping on orders over $50</p>
              </div>
              <div class="rounded-3xl border border-slate-200 p-5">
                <p class="text-4xl font-extrabold text-green-600">24/7</p>
                <p class="mt-3 text-sm text-gray-500">Customer support anytime</p>
              </div>
            </div>
          </div>
        </UCard>

        <div class="grid gap-6 sm:grid-cols-3">
          <UCard class="p-8 text-center">
            <p class="text-5xl font-extrabold text-green-600">2,000+</p>
            <p class="mt-3 text-sm text-gray-500">Curated products</p>
          </UCard>
          <UCard class="p-8 text-center">
            <p class="text-5xl font-extrabold text-green-600">18,500+</p>
            <p class="mt-3 text-sm text-gray-500">Happy customers</p>
          </UCard>
          <UCard class="p-8 text-center">
            <p class="text-5xl font-extrabold text-green-600">99.8%</p>
            <p class="mt-3 text-sm text-gray-500">On-time dispatch</p>
          </UCard>
        </div>
      </div>

      <div class="space-y-6">
        <UCard class="p-8">
          <p class="text-sm uppercase tracking-[0.35em] text-green-600">What we believe</p>
          <h3 class="mt-3 text-3xl font-bold">Products that make life easier.</h3>
          <p class="mt-4 text-gray-600 leading-8">
            Every item is chosen with quality, value, and real daily use in mind. We champion brands that are reliable, sustainable, and delight customers with meaningful design.
          </p>
          <div class="mt-8 space-y-4">
            <div
              v-for="value in values"
              :key="value.title"
              class="flex gap-4"
            >
              <UCard class="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 p-0 shadow-none border border-green-100">
                <span class="text-green-700 text-xl">
                  <i :class="value.icon" />
                </span>
              </UCard>
              <div>
                <p class="font-semibold">{{ value.title }}</p>
                <p class="text-sm text-gray-500">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </UCard>

        <UCard class="p-8 bg-linear-to-br from-slate-900 to-slate-800 text-white">
          <p class="text-sm uppercase tracking-[0.35em] text-green-300">Join our community</p>
          <h3 class="mt-3 text-3xl font-bold">Discover new favorites every week.</h3>
          <p class="mt-4 text-gray-200 leading-7">
            Stay connected and receive curated picks, early access to offers, and shopping tips crafted for your lifestyle.
          </p>
          <UButton color="secondary" class="mt-8" size="xl" to="/">
            Start shopping
          </UButton>
        </UCard>
      </div>
    </section>
  </div>
</template>


