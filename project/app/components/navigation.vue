<script setup lang="ts">

const searchQuery = useSearchQuery()




</script>


<template>
   <header class="bg-default">
    <UContainer>
        <nav class="flex h-20 items-center justify-between">
            <NuxtLink 
                to="/"
                class="flex items-center gap-3">
            
            <span class ="text-3xl font-extrabold" style="color: #1DCF64;"> Ecommerce</span>
            </NuxtLink>

            <span>
                <UInput
                    v-model="searchQuery"
                    placeholder="Search products..."
                    icon="i-lucide-search"
                    />
           </span>
           

            <div class="flex items-center gap-8 text-lg font-extrabold">
                <UButton 
                    to="/"
                    variant="ghost"
                    color="primary">
                Home
            </UButton>

            <UButton
                to="/about"
                variant="ghost"
                color="primary">
            About
        </UButton>
        <UButton
            to="/cart"
            variant="ghost"
            color="primary">
        Cart
    </UButton>
            </div>
        </nav>
        
    

    </UContainer>
   </header>
</template>



