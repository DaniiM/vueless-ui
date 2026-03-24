<script setup>
defineProps({
  isOpen: Boolean
})
</script>

<template>
  <div
    v-if="isOpen"
    class="menu-items"
    role="menu"
  >
    <slot />
  </div>
</template>

<style scoped>
.menu-items {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 150px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 0.25rem 0;
  margin-top: 0.25rem;
  z-index: 1000;
}
</style>