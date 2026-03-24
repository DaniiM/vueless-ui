<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  registerItem: Function
})

const el = ref(null)

onMounted(() => {
  if (props.registerItem) props.registerItem(el.value)
})
</script>

<template>
  <div
    ref="el"
    class="menu-item"
    role="menuitem"
    tabindex="-1"
  >
    <slot />
  </div>
</template>

<style scoped>
.menu-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.menu-item:hover,
.menu-item:focus {
  background-color: #f3f4f6;
  outline: none;
}
</style>