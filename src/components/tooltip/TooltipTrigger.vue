<script setup>
import { ref, onMounted } from 'vue'
import { useTooltipContext } from './useTooltipContext'

const { open, close, triggerRef } = useTooltipContext()

const el = ref(null)

onMounted(() => {
  triggerRef.value = el.value
})
</script>

<template>
    <span
      ref="el"
      @mouseenter="open"
      @mouseleave="close"
      @focus="open"
      @blur="close"
    >
      <slot />
    </span>
  </template>