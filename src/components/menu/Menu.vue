<script setup>
import { ref, nextTick } from 'vue'
import { moveIndex, getKeyAction } from '../../utils/keyboard.js'
import { focusElement } from '../../utils/dom.js'

const isOpen = ref(false)
const items = ref([])
const activeIndex = ref(-1)

function toggle() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    activeIndex.value = 0
    focusItem(activeIndex.value)
  }
}

function close() {
  isOpen.value = false
  activeIndex.value = -1
}

function registerItem(el) {
  if (el && !items.value.includes(el)) items.value.push(el)
}

function focusItem(index) {
  nextTick(() => focusElement(items.value[index]))
}

function handleKey(e) {
  const action = getKeyAction(e)
  if (!action || !isOpen.value) return

  if (action === 'down' || action === 'up') {
    e.preventDefault()
    activeIndex.value = moveIndex(activeIndex.value, items.value.length, action)
    focusItem(activeIndex.value)
  } else if (action === 'esc') {
    close()
  } else if (action === 'enter') {
    e.preventDefault()
    if (items.value[activeIndex.value]) items.value[activeIndex.value].click()
  }
}
</script>

<template>
  <div class="menu-wrapper" @keydown="handleKey">
    <slot :is-open="isOpen" :toggle="toggle" :register-item="registerItem" />
  </div>
</template>

<style scoped>
.menu-wrapper {
  display: inline-block;
  position: relative;
  font-family: Arial, sans-serif;
}
</style>