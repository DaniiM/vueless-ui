<script setup>
import { ref, onMounted } from 'vue'
import { useTooltipContext } from './useTooltipContext'

const { isOpen, contentRef } = useTooltipContext()

const el = ref(null)

onMounted(() => {
  contentRef.value = el.value
})
</script>

<template>
  <div
    v-if="isOpen"
    ref="el"
    role="tooltip"
  >
    <slot />
  </div>
</template>