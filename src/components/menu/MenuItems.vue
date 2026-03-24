<script setup>
import { inject } from 'vue'

const menu = inject('menu')
</script>

<template>
  <div v-if="menu.isOpen">
    <slot />
  </div>
</template>