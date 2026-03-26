<script setup>
import { useMenuContext } from './useMenuContext'

const menu = useMenuContext()
</script>

<template>
  <button
    class="menu-button"
    @click="menu.toggle"
    aria-haspopup="menu"
    :aria-expanded="menu.isOpen.value"
  >
    <slot />
  </button>
</template>

<style scoped>
.menu-button {
  background-color: #4f46e5;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  user-select: none;
}

.menu-button:hover {
  background-color: #6366f1;
}

.menu-button:focus {
  outline: 2px solid #818cf8;
  outline-offset: 2px;
}
</style>