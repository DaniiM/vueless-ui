<script setup>
import { inject } from 'vue'

const menu = inject('menu')

function handleClick() {
  menu.toggle()
}
</script>

<template>
  <button @click="handleClick">
    <slot />
  </button>
</template>