<template>
  <div class="w-auto h-auto gap-8 flex">
    <div class="w-3/4 h-auto">
      <div class="grid grid-cols-3 gap-8">
        <Product
          v-for="product in productsStore.products"
          :key="product.id"
          :name="product.name"
          :description="product.description"
          :image="getImageUrl(product.imageUrl)"
          :price="product.price"
          :unit="product.unit"
          :favorite="product.favorite"
        />
      </div>
    </div>
    <div class="w-1/4 h-auto bg-[#F9FCFE] border border-[#54B1F4] rounded-2xl px-4 py-6">
      <h4 class="font-robotoSlab font-bold text-[28px] mb-6">Your basket</h4>
      <div class="w-full">
        <div class="w-full flex">
          <div class="w-1/2 h-full">
            <h6 class="font-robotoSlab font-bold text-xl">Tasty bread</h6>
            <p class="font-robotoSlab font-normal text-base">$2.30 - 4pcs</p>
          </div>
          <div class="w-1/2 h-full flex justify-end">
            <h6 class="font-robotoSlab font-bold text-xl">$ 9.20</h6>
          </div>
        </div>
      </div>
      <div class="w-full h-auto flex py-6">
        <div class="w-1/2 h-auto">
          <h6 class="font-robotoSlab font-bold text-2xl">Total</h6>
          <p class="font-robotoSlab font-normal text-base">Tax included</p>
        </div>
        <div class="w-1/2 flex justify-end">
          <h6 class="font-robotoSlab font-bold text-2xl">$24.62</h6>
        </div>
      </div>
      <div class="w-full h-auto flex justify-center items-center">
        <button
          class="w-full flex justify-center items-center font-roboto font-normal text-xl bg-[#0092FB] text-white border-2 border-[#0092FB] py-3 rounded-md"
          type="button"
        >
          To checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'

import Product from '@/components/Product.vue'

const productsStore = useProductsStore()

const getImageUrl = (imageUrl) => {
  return new URL(imageUrl, import.meta.url).href
}

console.log
</script>
