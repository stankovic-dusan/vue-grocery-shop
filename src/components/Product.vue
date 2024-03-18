<template>
  <div class="bg-white h-auto flex flex-col rounded-2xl px-4 py-6 shadow-custom">
    <div class="w-full h-auto flex justify-end">
      <Heart
        v-if="favorite"
        @click="console.log('like')"
        class="cursor-pointer"
        :size="iconSize"
        fillColor="#FF2738"
      />
      <HeartOutline
        v-else
        @click="console.log('like')"
        class="cursor-pointer"
        :size="iconSize"
        fillColor="#979797"
      />
    </div>
    <div class="w-[200px] h-[200px] self-center flex justify-center items-center">
      <img :src="image" alt="product-img" class="w-[80%] h-[80%]" />
    </div>
    <div class="w-full h-[88px] my-6">
      <h6 class="font-robotoSlab font-bold text-2xl text-[#262626]">{{ name }}</h6>
      <p class="font-robotoSlab font-normal text-sm">{{ description }}</p>
      <h6 class="font-robotoSlab font-bold text-xl text-[#262626] mt-2">
        $ {{ price }}
        <span class="font-robotoSlab font-normal text-base">(per {{ unit }})</span>
      </h6>
    </div>
    <div class="w-full h-auto flex justify-center items-center">
      <button
        class="w-full flex justify-center items-center font-roboto font-normal text-xl text-[#0092FB] border-2 border-[#0092FB] py-3 rounded-md"
        type="button"
      >
        Add to cart <PlusCircleOutline class="px-2" :size="iconSize" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import PlusCircleOutline from 'vue-material-design-icons/PlusCircleOutline.vue'
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue'
import Heart from 'vue-material-design-icons/Heart.vue'

const props = defineProps(['name', 'image', 'description', 'price', 'unit', 'favorite'])

const iconSize = ref(20)
</script>
