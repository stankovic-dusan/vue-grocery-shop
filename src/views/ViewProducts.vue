<template>
  <div class="w-auto h-auto gap-8 flex">
    <div class="w-3/4 h-auto">
      <div class="grid grid-cols-3 gap-8">
        <Product
          v-for="product in productsStore.products"
          :key="product.id"
          :product="product"
          :name="product.name"
          :description="product.description"
          :image="getProductImg(product.imageUrl)"
          :price="product.price"
          :unit="product.unit"
          :favorite="product.favorite"
        />
      </div>
    </div>
    <div class="w-1/4 h-auto bg-[#F9FCFE] border border-[#54B1F4] rounded-2xl px-4 py-6">
      <h4 class="font-robotoSlab font-bold text-[28px] mb-6">Your basket</h4>
      <Cart />
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/index'

import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'

const productsStore = useProductsStore()

const getProductImg = (imageUrl) => {
  return new URL(imageUrl, import.meta.url).href
}
</script>
