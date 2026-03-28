<script setup>
import { ref, provide } from 'vue'
import { TOOLTIP_CTX } from './context'

const isOpen = ref(false)
const triggerRef = ref(null)
const contentRef = ref(null)

function open() {
    isOpen.value = true
}

function close() {
    isOpen.value = false
}

provide(TOOLTIP_CTX, {
  isOpen,
  open,
  close,
  triggerRef,
  contentRef
})
</script>

<template>
    <slot/>
</template>

<style scoped>
</style>