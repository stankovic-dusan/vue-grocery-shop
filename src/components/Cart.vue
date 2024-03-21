<template>
  <div class="w-full">
    <div class="w-full flex mt-4" v-for="product in cart">
      <div class="w-1/2 h-full">
        <h6 class="font-robotoSlab font-bold text-xl">{{ product.name }}</h6>
        <p class="font-robotoSlab font-normal text-base">
          {{ product.price }} - {{ product.quantity }} {{ product.unit }}
        </p>
      </div>
      <div class="w-1/2 h-full flex justify-end">
        <h6 class="font-robotoSlab font-bold text-xl">
          $ {{ productTotalPrice(product.quantity, product.price) }}
        </h6>
      </div>
    </div>
  </div>
  <div class="w-full h-auto flex py-6">
    <div class="w-1/2 h-auto">
      <h6 class="font-robotoSlab font-bold text-2xl">Total</h6>
      <p class="font-robotoSlab font-normal text-base">Tax included</p>
    </div>
    <div class="w-1/2 flex justify-end">
      <h6 class="font-robotoSlab font-bold text-2xl">${{ cartTotal }}</h6>
    </div>
  </div>
  <div class="w-full h-auto flex justify-center items-center">
    <BaseButton
      text="To Checkout"
      icon="credit-card"
      button-custom="w-full bg-[#0092FB] text-white"
    />
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/index'

import BaseButton from '@/components/ui/BaseButton.vue'

const productsStore = useProductsStore()

let cart = productsStore.cart

const productTotalPrice = (quantity, price) => {
  let total = quantity * price
  return total.toFixed(2)
}
</script>
