<script setup>
import { useMenuContext } from './useMenuContext'

const menu = useMenuContext()

console.log(menu.isOpen.value)
</script>

<template>
  <Transition name="dropdown">
    <div v-if="menu.isOpen.value" class="menu-items" role="menu">
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.menu-items {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 150px;
  max-width: 90vw;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 0.25rem 0;
  margin-top: 0.25rem;
  z-index: 1000;
}

.menu-items[data-state="enter"] {
  opacity: 1;
  transform: translateY(0);
}

.menu-items[data-state="leave"] {
  opacity: 0;
  transform: translateY(-5px);
}
</style>