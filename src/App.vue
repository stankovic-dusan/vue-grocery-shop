<template>
  <div class="w-auto h-full flex flex-col justify-center items-center px-20 py-12 overflow-hidden">
    <div class="h-full lg:max-w-[1520px] md:w-full">
      <h1 class="font-robotoSlab font-bold text-4xl">Your regular grocery shop</h1>
      <TheNavigation />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import TheNavigation from './components/layout/TheNavigation.vue'
</script>
