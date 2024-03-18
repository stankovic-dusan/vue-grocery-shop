<template>
  <div class="w-full flex justify-center items-center">
    <button
      class="flex justify-center items-center w-full border-2 border-[#0092FB] rounded-md py-3"
      type="button"
    >
      {{ text }} <PlusCircleOutline class="px-2" size="20" />
    </button>
  </div>
</template>

<script setup>
import PlusCircleOutline from 'vue-material-design-icons/PlusCircleOutline.vue'
import MenuIcon from 'vue-material-design-icons/Menu.vue'

const props = defineProps(['text', 'icon'])
</script>
