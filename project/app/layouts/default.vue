<script setup lang="ts">
import Footing from '~/components/footing.vue';
import Navigation from '~/components/navigation.vue';


</script>


<template>
    <div class="min-h-screen flex flex-col">
    <Navigation/>
    <main class="flex-1">
    <slot/>
</main>
    <Footing/>
    </div>  
</template>



