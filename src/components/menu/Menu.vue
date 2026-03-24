<script setup>
import { provide } from 'vue'
import { useMenu } from '../../composables/useMenu'

const menu = useMenu()
provide('menu', menu)
</script>

<template>
  <slot />
</template>